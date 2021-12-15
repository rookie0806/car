from django.contrib import admin
from . import models

# Register your models here.
@admin.register(models.img)
class ImgAdmin(admin.ModelAdmin):

    search_fields = (
        'path',
        'img_url',
        'repair',
    )
    list_display = (
        'path',
        'img_url',
        'repair',
    )

@admin.register(models.Repair)
class RepairAdmin(admin.ModelAdmin):

    search_fields = (
        'car_number',
        'phone_number',
        'date',
    )
    list_display = (
        'car_number',
        'phone_number',
        'date',
    )


@admin.register(models.Key)
class RepairAdmin(admin.ModelAdmin):

    search_fields = (
        'key',
    )
    list_display = (
        'key',
    )