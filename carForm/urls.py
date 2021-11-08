from django.urls import path
from . import views

urlpatterns = [
    path('home/<str:completeName>/<str:email>/<str:logo>/<str:make>/<str:model>/<str:version>/<str:plate>/<str:vin>/<str:year>/<str:kms>/',
         views.home, name="home"),
    path('chk/', views.chk, name="chk")
]
