# Property Model Color Mapping

The Masterplan component now supports custom color mapping for property model dots. You can specify custom colors for each property model by passing a `colorMapping` prop.

## Usage

### Basic Usage (Default Colors)

```tsx
<Masterplan
  lotes={lotes}
  allProperties={allProperties}
  imageSrc={imageSrc}
  modeloImages={modeloImages}
  title={proyecto}
  onContinue={handleMasterplanContinue}
  onClose={handleTooltipClose}
/>
```

### Custom Color Mapping

```tsx
// Define your custom color mapping
const customColorMapping = {
  Barreno: '#FF6B35', // Orange
  Legón: '#4ECDC4', // Teal
  Mayal: '#45B7D1', // Blue
  'Nuevo Modelo': '#96CEB4', // Green
  Premium: '#FFEAA7', // Yellow
};

<Masterplan
  lotes={lotes}
  allProperties={allProperties}
  imageSrc={imageSrc}
  modeloImages={modeloImages}
  title={proyecto}
  colorMapping={customColorMapping}
  onContinue={handleMasterplanContinue}
  onClose={handleTooltipClose}
/>;
```

## Default Colors

If no `colorMapping` is provided, the component uses these default colors:

- **Barreno**: `#FF7F18` (Orange)
- **Legón**: `#1DFF16` (Green)
- **Mayal**: `#19C9FF` (Blue)
- **Other models**: `#9CA3AF` (Gray)

## Color Format

Colors can be specified in any valid CSS color format:

- Hex: `#FF6B35`
- RGB: `rgb(255, 107, 53)`
- RGBA: `rgba(255, 107, 53, 0.8)`
- Named colors: `red`, `blue`, etc.

## Dynamic Legend

The legend now automatically shows all unique models present in your `lotes` data, so you don't need to hardcode the model names.

## Example Implementation

```tsx
// In your component
const handleMasterplanContinue = (property: PropertyCardInterface) => {
  // Your logic here
};

// Custom colors for your property models
const propertyColors = {
  'Casa A': '#FF6B35',
  'Casa B': '#4ECDC4',
  'Casa C': '#45B7D1',
  'Casa D': '#96CEB4',
};

return (
  <Masterplan
    lotes={lotes}
    allProperties={selectedModel?.properties || []}
    imageSrc={barrioSeleccionado.image}
    modeloImages={barrioSeleccionado.modeloImages}
    title={proyecto}
    colorMapping={propertyColors}
    onContinue={handleMasterplanContinue}
    onClose={() => setSelectedLote(null)}
  />
);
```

## Notes

- The `colorMapping` prop is optional
- If a model doesn't have a color specified in the mapping, it will fall back to the default colors
- The legend automatically updates to show all models present in your data
- Colors are applied to both the dots on the map and the legend indicators
