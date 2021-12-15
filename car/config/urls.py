from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.conf.urls import include, url
from django.views import defaults as default_views
from django.views.generic import TemplateView
from django.views.static import serve
from car import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns = [
    url(settings.ADMIN_URL, admin.site.urls),
    url(r'^users/', include('car.users.urls')),
    url(r'^repair/', include('car.repair.urls')),
    url(r'^accounts/', include('allauth.urls')),
         url(r'^media/(?P<path>.*)$', serve, {
            'document_root': settings.MEDIA_ROOT
        }),
    url(r'^',views.ReactAppView.as_view()),
    # Your stuff: custom urls includes go here
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



if settings.DEBUG:
    # This allows the error pages to be debugged during development, just visit
    # these url in browser to see how these error pages look like.
    urlpatterns += [
        url(r'^400/$', default_views.bad_request,
            kwargs={'exception': Exception('Bad Request!')}),
        url(r'^403/$', default_views.permission_denied,
            kwargs={'exception': Exception('Permission Denied')}),
        url(r'^404/$', default_views.page_not_found,
            kwargs={'exception': Exception('Page not Found')}),
        url(r'^500/$', default_views.server_error),
    ]
    if 'debug_toolbar' in settings.INSTALLED_APPS:
        import debug_toolbar
        urlpatterns = [
            url(r'^__debug__/', include(debug_toolbar.urls)),
        ] + urlpatterns