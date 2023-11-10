"""
URL configuration for project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from project.cigar import views as cigarViews
from project.accounts import views as accountViews
from project.reviews import views as reviewViews
from django.conf import settings
from django.conf.urls.static import static 

router = routers.DefaultRouter()
router.register(r'cigar', cigarViews.CigarViewSet)
router.register(r'brand', cigarViews.BrandViewset)
router.register(r'profiles', accountViews.ProfileViewSet)
router.register(r'accounts', accountViews.UserViewSet)
router.register(r'reviews', reviewViews.ReviewViewset)
router.register(r'reviewslist', accountViews.UserReviewList, basename='reviews')

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls'))
]   + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
