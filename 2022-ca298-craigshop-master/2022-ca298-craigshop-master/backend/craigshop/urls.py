from . import views, forms
from django.urls import path


urlpatterns = [
    path('', views.index),
]