from django.urls import path

from . import views

urlpatterns = [
    path("search-items/", views.search_items, name="search_items"),  # type: ignore
    path("search-items/<str:search>/<str:org>/", views.search_items, name="search_items"),  # type: ignore
    path("manage-item/", views.RequestDataApiView.as_view()),
    path("manage-item/<str:item_name>/", views.UrlDataApiView.as_view()),
]
