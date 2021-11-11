from django.urls import path
from . import views

urlpatterns = [
    path('<str:completeName>/<str:email>/<str:logo>/<str:make>/<str:model>/<str:version>/<str:plate>/<str:vin>/<str:year>/<str:sellingPrice>/<str:address>/<str:city>/<str:province>/<str:phone>/',
         views.home, name="home"),
    path('chk/', views.chk, name="chk")
]
