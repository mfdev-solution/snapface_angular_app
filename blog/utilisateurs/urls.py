from django.contrib import admin
from django.urls import path
from . import views


urlpatterns = [
   path('' , views.utilisateurs_views,name='utilisateurs'),
   path('creer/',views.creer_view)
]