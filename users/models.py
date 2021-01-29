from django.db import models

# Create your models here.
class User(models.Model):
    user_id     = models.AutoField(primary_key=True)
    first_name  = models.CharField(max_length=50)
    last_name   = models.CharField(max_length=50)
    profession  = models.CharField(max_length=50)
    email       = models.CharField(max_length=80)
    yoe         = models.DecimalField(max_digits=3, decimal_places=1, blank=True)
    level       = models.CharField(max_length=12, blank=True)