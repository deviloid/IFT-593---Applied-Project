from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home_view(request, *args, **kwargs):
    if request.user.is_authenticated == True:
        # return HttpResponse("<h1>Hello World!</h>")
        return render(request, "signup/signup.html", {})
    if request.user.is_authenticated == False:
        return render(request, "login/login.html", {})
def signup_view(request, *args, **kwargs):
    return render(request, "signup/signup.html", {})

def contact_view(request, *args, **kwargs):
    return HttpResponse("<h1>Contact Page</h>")