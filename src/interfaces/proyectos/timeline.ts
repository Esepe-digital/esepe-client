export type TimelineItem = {
  label: string;
  status: 'completed' | 'current' | 'upcoming';
  number?: number;
};

export interface TimelineProps {
  title?: string;
}
