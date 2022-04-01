from django.shortcuts import redirect, render
from .models import Note

# Create your views here.
def note(request):
    notes = Note.objects.all()
    return render(request, 'pages/note.html', {'notes': notes})

def createNote(request):
    if request.method == 'POST':
        title = request.POST['note-title']
        description = request.POST['note-description']
        if title and description != '':
            note = Note.objects.create(title=title, description=description)
            note.save()
        return redirect('note')

def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return redirect('note')