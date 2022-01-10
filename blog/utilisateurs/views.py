from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.

#definition des fonctions

def utilisateurs_views(request):
    return render(request,'./utilisateurs/list.html')

def creer_view(request):
    # return HttpResponse("Page de creation d'utilisateurs")
    return render(request , './utilisateurs/creer.html')