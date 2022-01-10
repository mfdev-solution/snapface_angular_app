#importation de fichiers
from django.http import HttpResponse
from django.shortcuts import render
from . db_articles import articles

#definition de methodes
def home_view(request):
    # return HttpResponse("hello world")
    return render(request,'home.html')
def my_view(request):
    return HttpResponse("I'm Mouhamed Al Amine Fall")
def contact_view(request):
    # return HttpResponse("Contacter moi"
    return render(request,'contact.html')

def articles_view(request):
    return render(request , 'articles.html',context={'articles':articles  })