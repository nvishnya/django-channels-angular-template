from chat.views import MessagesListView
from django.urls.conf import path
from django.views.generic import TemplateView

urlpatterns = [
    path("", TemplateView.as_view(template_name="index.html")),
    path("<room_name>/", TemplateView.as_view(template_name="index.html")),
    path("api/messages/<room_name>/", MessagesListView.as_view()),
]
