interface CategoryBadgeProps {
  category: string;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const getCategoryColor = (category: string) => {
    switch (category?.toLowerCase()) {
      case 'consejos':
        return 'bg-[#D4E5FF] text-[#123752]';
      case 'finanzas':
        return 'bg-[#D4E5FF] text-[#123752]';
      case 'diseño':
        return 'bg-[#D4E5FF] text-[#123752]';
      default:
        return 'bg-[#D4E5FF] text-[#123752]';
    }
  };

  return (
    <span
      className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(category)}`}
    >
      {category}
    </span>
  );
}
