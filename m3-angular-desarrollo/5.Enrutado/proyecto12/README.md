
# Angular: Enrutado con módulos 

ng new proyecto12 --routing --skip-git --style=css

ng generate module photos --routing --module app.module
ng generate component photos/photo-gallery
ng generate component photos/photo-detail
ng generate interface photos/models/photo --type=model --prefix=I
ng generate service photos/services/photo

ng generate module users --routing --module app.module
ng generate component users/user-list
ng generate component users/user-detail
ng generate interface users/models/user --type=model --prefix=I
ng generate service users/services/user
