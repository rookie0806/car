from django.db import models

class Repair(models.Model):
    car_number = models.CharField(max_length=50,default="")
    phone_number = models.CharField(max_length=50,default="")
    date =  models.CharField(max_length=50,default="")
    def __str__(self):
        return '[{}] - {} - {}'.format(self.car_number, self.phone_number, self.date)

class img(models.Model):
    path = models.CharField(max_length=100,default="")
    img_url = models.CharField(max_length=100,default="")
    repair = models.ForeignKey(
        Repair, null=True, related_name='repairImg',on_delete=models.CASCADE)
    def __str__(self):
        return ' {} - {}'.format(self.path, self.img_url)

class Key(models.Model):
    key = models.CharField(max_length=300,default="")