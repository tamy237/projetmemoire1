from django.urls import path
from .views import EnregistrementView, ConnexionView

urlpatterns = [
    path('enregistrement/', EnregistrementView.as_view(), name='enregistrement'),
    path('connexion/', ConnexionView.as_view(), name='connexion'),
]
