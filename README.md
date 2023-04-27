# NoteApp

<picture>
 <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/91086975/234899197-8b54fbab-40dd-489e-8f23-d6aee76c305d.png">
 <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/91086975/234899197-8b54fbab-40dd-489e-8f23-d6aee76c305d.png">
 <img alt="shows webpage in light and dark mode " src="https://user-images.githubusercontent.com/91086975/234899197-8b54fbab-40dd-489e-8f23-d6aee76c305d.png">
</picture>

# How did I approach the problem and solve it ?
---
> To connect django api with react frontend, I add the path of frontend react in the settings.py file  in django backend. Some of this code is 
> >STATICFILES_DIRS=[
    BASE_DIR/ 'frontend/build/static'
]
---
> To display current date and heading of the note in on the main page of the page on server, I add following codes in models.py file of django app.
> > updated = models.DateTimeField(auto_now=True)
> > created = models.DateTimeField(auto_now_add=True)
 
---
> To input text area in the note,  I add the following codes in models.py file.
> >  body = models.TextField(null=True, blank=True)
# Cloning the repository

--- 
 Clone the repository using the command below :
> git clone https://github.com/100cksingh/NoteApp.git
---
Move into the directory where we have the project files 
> cd NoteApp
---
 Create a virtual environment
 > If you are on Windows
  >> virtualenv env
 > If you are on Linux or Mac
 > >python -m venv env

---
Activate the virtual environment 
>  If you are on Windows
>> .\env\Scripts\activate
> If you are on Linux or Mac
> > source env/bin/activate

# Running the App

To run the Notes App, we use :
> python manage.py runserver
> the development server will be started at 
>>   http://127.0.0.1:8000/

