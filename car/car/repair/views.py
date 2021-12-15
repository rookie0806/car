from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers
from rest_framework.permissions import AllowAny
import datetime
from django.db.models import Q
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Func, F
import requests
import json
# Create your views here.
class find(APIView):
    @csrf_exempt
    def dispatch(self, request, *args, **kwargs):
       return super(find, self).dispatch(request, *args, **kwargs)

    def get(self, request, format=None):
        #pn = request.query_params.get('pn', None)
        cn = request.query_params.get('cn', None)
        try:
            url = "https://api.dropboxapi.com/2/files/search_v2"
            shared_url = "https://api.dropboxapi.com/2/sharing/create_shared_link_with_settings"

            key = models.Key.objects.get()
            print(key.key)
            headers = {
                "Authorization": "Bearer "+key.key,
                "Content-Type": "application/json"
            }
            print(headers)
            data = {
                "query": cn,#+"_"+pn,
                "match_field_options": {"include_highlights":True},
                "options": {"path":"/pbcar","filename_only":False},
            }
            print(cn)
            r = requests.post(url, headers=headers, data=json.dumps(data))
            print(r.json())
            for i in range(0,len(r.json()['matches'])):
                print(r.json()['matches'][i]['metadata']['metadata']['path_lower'])
                try:
                    repair = models.Repair.objects.get(Q(car_number=cn) & Q(date=r.json()['matches'][i]['metadata']['metadata']['path_lower'].split('_')[1]))
                except models.Repair.DoesNotExist:
                    repair = models.Repair.objects.create(car_number=cn,date=r.json()['matches'][i]['metadata']['metadata']['path_lower'].split('_')[1])
                    repair.save()
                data = {
                    "query": ".png",
                    "match_field_options": {"include_highlights":True},
                    "options": {"path":r.json()['matches'][i]['metadata']['metadata']['path_lower'],"filename_only":False},
                }
                r2 = requests.post(url, headers=headers, data=json.dumps(data))
                print(r2.text)
                for j in range(0,len(r2.json()['matches'])):
                    print(r2.json()['matches'])
                    try:
                        img = models.img.objects.get(Q(path=r2.json()['matches'][j]['metadata']['metadata']['path_lower']))
                    except models.img.DoesNotExist:
                        data = {
                            "path": r2.json()['matches'][j]['metadata']['metadata']['path_lower'],
                            "settings": {}
                        } 
                        r3 = requests.post(shared_url, headers=headers, data=json.dumps(data))
                        print(r3.text)
                        try:
                            img_url = r3.json()['url'].replace('dl=0','raw=1')
                        except:
                            img_url = r3.json()['error']['shared_link_already_exists']['metadata']['url'].replace('dl=0','raw=1')
                        img = models.img.objects.create(path=r2.json()['matches'][j]['metadata']['metadata']['path_lower'],img_url=img_url,repair=repair)
                        img.save()
            repairs = models.Repair.objects.filter(Q(car_number=cn))
            if(len(repairs)>0):
                serializer = serializers.RepairSerializer(repairs,many=True)
                return Response(data=serializer.data, status=status.HTTP_200_OK) 
            else:    
                res = {"err":"can't find"}
                return Response(data=res,status=status.HTTP_400_BAD_REQUEST)     
        except:
            res = {"err":"can't find"}
            return Response(data=res,status=status.HTTP_400_BAD_REQUEST)      