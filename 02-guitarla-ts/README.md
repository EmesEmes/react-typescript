# non-null assertion operator\operador de aserción no nula
En TypeScript, el operador ! se utiliza para indicar que una expresión no es null ni undefined. Esto se conoce como el operador de aserción no nula. Es útil cuando el programador está seguro de que una variable no será null o undefined en tiempo de ejecución, aunque TypeScript no pueda inferirlo.

# Primitive Types
Son los tipos de datos que soporta TypeScript de forma nativa. y Son los siguientes:
* number
* string
* boolean
* null
* undefined

> En el caso de los arreglos hay una sintaxis especial para crearlos.

# Types & Interfaces
En TypeScript, tanto los types como las interfaces se utilizan para definir la forma de los objetos y otros tipos de datos. Aunque son similares y a menudo se pueden usar de manera intercambiable, hay algunas diferencias clave entre ellos.

## Types
Los types (alias de tipos) permiten definir tipos personalizados. Pueden ser utilizados para combinar tipos existentes, crear tipos complejos y definir tipos de unión o intersección.
```javascript
type Guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}
```

## Interfaces
Las interfaces se utilizan para definir la estructura de un objeto. Pueden ser extendidas y combinadas, lo que permite una mayor flexibilidad y reutilización.
```javascript
interface Guitar {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}
```

### Diferencias Clave
1. Extensibilidad: Las interfaces pueden ser extendidas después de su creación, mientras que los types no.
2. Unión e Intersección: Los types pueden definir tipos de unión e intersección, mientras que las interfaces no.
3. Implementación: Las interfaces son más adecuadas para definir contratos que las clases pueden implementar.

## Inline Type
Un "inline type" en TypeScript se refiere a la definición de un tipo directamente en el lugar donde se utiliza, en lugar de definirlo previamente con type o interface. Esto es útil para tipos simples y cuando no se necesita reutilizar el tipo en múltiples lugares.

## Type Separado
Un "type separado" en TypeScript se refiere a la definición de un tipo personalizado utilizando la palabra clave type, y se define de manera independiente antes de ser utilizado en el código. Esto es útil para tipos que se reutilizan en múltiples lugares o cuando se necesita una definición clara y reutilizable de un tipo de datos.

Ventajas del Type Separado:
1. Reutilización: Puedes reutilizar el tipo en múltiples lugares del código.
2. Legibilidad: Hace que el código sea más legible y organizado.
3. Mantenimiento: Facilita el mantenimiento y la actualización del tipo en un solo lugar.

Cúando usar un Type Separado:
1. Cuando el tipo se utiliza en múltiples lugares.
2. Cuando el tipo es complejo y necesita una definición clara.
3. Para mejorar la legibilidad y organización del código.


## Archivo externo de Types
Un archivo externo de tipos en TypeScript es un archivo que contiene definiciones de tipos, interfaces y otros elementos relacionados con la tipificación, separados del código principal de la aplicación. Estos archivos suelen tener la extensión .d.ts (declaration files) o simplemente .ts si contienen solo definiciones de tipos.

Ventajas de Usar Archivos Externos de Tipos:
1. Organización: Mantiene el código más limpio y organizado al separar las definiciones de tipos del código de implementación.
2. Reutilización: Facilita la reutilización de tipos en diferentes partes del proyecto.
3. Mantenimiento: Hace que sea más fácil mantener y actualizar las definiciones de tipos en un solo lugar.

## Utility Types
Los "Utility Types" en TypeScript son tipos predefinidos que proporcionan funcionalidades comunes para transformar y manipular otros tipos. Estos tipos utilitarios ayudan a simplificar y reducir el código repetitivo al trabajar con tipos complejos.

Ejemplos Comunes de Utility Types: 
1. Partial<Type>: Convierte todas las propiedades de un tipo en opcionales.
```javascript
interface User {
    id: number;
    name: string;
    email: string;
}

const updateUser: Partial<User> = {
    name: "New Name"
};
```
2. Required<Type>: Convierte todas las propiedades de un tipo en requeridas.
```javascript
interface User {
    id?: number;
    name?: string;
    email?: string;
}

const newUser: Required<User> = {
    id: 1,
    name: "John",
    email: "john@example.com"
};
```
3. Readonly<Type>: Convierte todas las propiedades de un tipo en solo lectura.
```javascript
interface User {
    id: number;
    name: string;
    email: string;
}

const user: Readonly<User> = {
    id: 1,
    name: "John",
    email: "john@example.com"
};

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
```
4. Pick<Type, Keys>: Crea un tipo seleccionando un subconjunto de propiedades de otro tipo.
```javascript
interface User {
    id: number;
    name: string;
    email: string;
}

const userPreview: Pick<User, "id" | "name"> = {
    id: 1,
    name: "John"
};
```
5. Omit<Type, Keys>: Crea un tipo excluyendo un subconjunto de propiedades de otro tipo.
```javascript
interface User {
    id: number;
    name: string;
    email: string;
}

const userWithoutEmail: Omit<User, "email"> = {
    id: 1,
    name: "John"
};
```
6. Record<Keys, Type>: Crea un tipo con un conjunto de propiedades K de tipo T.
```javascript
type Role = "admin" | "user" | "guest";

const roles: Record<Role, string> = {
    admin: "Administrator",
    user: "Regular User",
    guest: "Guest User"
};
```
