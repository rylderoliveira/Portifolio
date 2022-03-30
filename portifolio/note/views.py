from urllib import request
from django.shortcuts import render

# Create your views here.
def note(request):
    return render(request, 'pages/note.html')