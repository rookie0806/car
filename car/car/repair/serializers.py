from rest_framework import serializers
from . import models
class ImgSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.img
        fields = (
            'path',
            'img_url',
        )
class RepairSerializer(serializers.ModelSerializer):
    repairImg = ImgSerializer(many=True)
    class Meta:
        model = models.Repair
        fields = (
            'car_number',
            'phone_number',
            'date',
            'repairImg',
        )

