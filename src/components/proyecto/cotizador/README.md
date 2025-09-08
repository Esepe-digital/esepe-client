# Componente Cotizador

## Descripción

El Cotizador es un componente de formulario multi-paso que permite a los usuarios cotizar propiedades inmobiliarias. Está construido siguiendo las mejores prácticas de React y TypeScript, con un enfoque en la modularidad, reutilización y mantenibilidad del código.

## Estructura del Proyecto

```
src/components/proyecto/cotizador/
├── components/           # Componentes reutilizables
│   ├── PropertyCard.tsx # Tarjeta de propiedad
│   ├── QuoteResumen.tsx # Resumen de cotización
│   └── Stepper.tsx      # Indicador de pasos
├── steps/               # Componentes de cada paso
│   ├── Step1.tsx       # Selección de modelo y condiciones
│   ├── Step2.tsx       # Selección de propiedad
│   └── Step3.tsx       # Datos personales
├── schemas/            # Esquemas de validación
│   └── validation.ts   # Validaciones Zod
├── types/             # Tipos y interfaces
│   └── index.ts       # Definiciones de tipos
└── index.tsx         # Componente principal
```

## Tecnologías y Librerías Utilizadas

### Core

- React 18
- Next.js 13+
- TypeScript
- TailwindCSS

### Formularios y Validación

- React Hook Form: Manejo de formularios
- Zod: Esquemas de validación
- @hookform/resolvers/zod: Integración de Zod con React Hook Form

### UI Components

- shadcn/ui: Componentes base
- Lucide React: Iconos
- Tailwind CSS: Estilos

## Funcionalidades Principales

### 1. Navegación Multi-paso

- Sistema de pasos controlado por estado
- Validación por paso antes de avanzar
- Navegación bidireccional (adelante/atrás)
- Indicador visual de progreso

### 2. Validaciones por Paso

#### Paso 1: Modelo y Condiciones

- Selección de modelo requerida
- Selección de pie (porcentaje) requerida
- Selección de plazo requerida
- Cálculo automático de UF

#### Paso 2: Selección de Propiedad

- Validación de modelo seleccionado
- Validación de etapa seleccionada
- Validación de propiedad seleccionada
- Filtrado de propiedades por etapa

#### Paso 3: Datos Personales

```typescript
const step3Schema = z.object({
  apellido: z.string().min(1, 'El apellido es requerido'),
  nombre: z.string().min(1, 'El nombre es requerido'),
  rut: z.string().min(1, 'El RUT es requerido'),
  email: z.string().email('Ingresa un email válido'),
  celular: z
    .string()
    .min(1, 'El celular es requerido')
    .max(10, 'Máximo 10 dígitos')
    .regex(/^\d+$/, 'Solo números permitidos'),
  aceptaTerminos: z.boolean().refine((val) => val === true, {
    message: 'Debes aceptar los términos y condiciones',
  }),
});
```

### 3. Gestión de Estado

- Estado centralizado en el componente principal
- Estado local por paso cuando es necesario
- Persistencia de datos entre pasos
- Validación en tiempo real

### 4. Componentes Reutilizables

#### PropertyCard

- Visualización consistente de detalles de propiedad
- Reutilizado en múltiples pasos
- Responsive design

#### Stepper

- Indicador visual de progreso
- Estados: completado, actual, pendiente
- Adaptable a diferentes cantidades de pasos

## Manejo de Formularios

### React Hook Form

- Validación en tiempo real
- Manejo eficiente de re-renders
- Integración con Zod para validaciones
- Modo onChange para validación instantánea

### Ejemplo de Uso

```typescript
const form = useForm<Step3FormData>({
  resolver: zodResolver(step3Schema),
  defaultValues: {
    apellido: formData.apellido,
    nombre: formData.nombre,
    // ...otros campos
  },
  mode: 'onChange',
});
```

## Estilos y Diseño

- Diseño responsive
- Sistema de grid flexible
- Componentes adaptables
- Paleta de colores consistente
- Espaciado y tipografía estandarizados

## Mejores Prácticas Implementadas

1. Tipado estricto con TypeScript
2. Validación de formularios robusta
3. Componentes modulares y reutilizables
4. Manejo de estado eficiente
5. Código limpio y mantenible
6. Nombres descriptivos y consistentes
7. Documentación clara y completa

## Consideraciones de Accesibilidad

- Labels semánticos
- Mensajes de error claros
- Estados de foco visibles
- Navegación por teclado
- Textos alternativos para imágenes

## Mantenimiento y Extensibilidad

- Estructura modular para fácil extensión
- Tipos y esquemas centralizados
- Componentes independientes y reutilizables
- Documentación detallada
