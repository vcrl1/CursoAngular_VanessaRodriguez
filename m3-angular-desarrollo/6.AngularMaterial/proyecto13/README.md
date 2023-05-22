
# Angular: Angular Material

ng new proyecto13 --routing=false --skip-git --style=css

ng add @angular/material
ng add @angular/material -y
ng add @angular/material -y --theme=indigo-pink --typography=true --animations=true

ng generate component user-list

ng generate component user-dir

ng generate interface user-dir/user --type=model --prefix=I

ng generate component user-detail

ng generate component periodic-elements
ng generate interface periodicElement --type=model --prefix=I

ng generate component user-table
