
# Angular: ReactiveFormsModule


ng new proyecto15 --routing=false --skip-git --style=css

ng generate component user-form

ng generate interface user-form/user --type=model --prefix=I

ReactiveFormsModule en imports de app.module.ts

Crear formulario en: 

user-form.component.ts

ng generate component user-form-validation

## Expresiones regulares

Las expresiones regulares son una herramienta poderosa para buscar y manipular strings basados en patrones de caracteres. En el contexto de la validación de formularios en Angular, la función `Validators.pattern` se usa para validar que el valor de un campo de formulario coincida con un patrón especificado por una expresión regular.

Una expresión regular es una secuencia de caracteres que forma un patrón de búsqueda. Este patrón se utiliza para encontrar coincidencias en una cadena de texto. Por ejemplo, la expresión regular `/abc/` encontrará todas las coincidencias de "abc" en una cadena de texto.

Además de caracteres literales, las expresiones regulares pueden incluir metacaracteres que tienen significados especiales. Algunos ejemplos son:

- `.`: Coincide con cualquier caracter individual, excepto los saltos de línea.
- `*`: Coincide con cero o más repeticiones del caracter o patrón anterior.
- `+`: Coincide con una o más repeticiones del caracter o patrón anterior.
- `?`: Hace que el caracter o patrón anterior sea opcional (coincide con cero o una repetición).
- `^`: Coincide con el inicio de la cadena de texto.
- `$`: Coincide con el final de la cadena de texto.
- `\d`: Coincide con cualquier dígito decimal (equivalente a `[0-9]`).
- `\w`: Coincide con cualquier caracter alfanumérico o guión bajo (equivalente a `[A-Za-z0-9_]`).
- `\s`: Coincide con cualquier espacio en blanco.

Para validar un correo electrónico utilizando una expresión regular en Angular, podrías hacer algo como esto:

```javascript
'email': new FormControl(null, [
  Validators.required, 
  Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
])
```

Esta expresión regular significa que el correo electrónico debe comenzar con uno o más caracteres alfanuméricos, puntos, guiones bajos, porcentajes, signos más o guiones (`^[a-z0-9._%+-]+`), seguido de un arroba (`@`), luego uno o más caracteres alfanuméricos, puntos o guiones (`[a-z0-9.-]+`), seguido de un punto (`\.`), y finalmente de dos a cuatro caracteres alfabéticos (`[a-z]{2,4}$`).

