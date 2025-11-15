import { Card } from '@/components/ui/card';
import { TrendingDown, TrendingUp } from 'lucide-react';

interface PredictionCardProps {
  price: number;
}

export default function PredictionCard({ price }: PredictionCardProps) {
  // Price recommendation logic
  const getPriceStatus = (p: number) => {
    if (p < 3000) return { label: 'Buy Now', color: 'bg-green-500/20 border-green-500/50', textColor: 'text-green-700 dark:text-green-400', icon: TrendingDown };
    if (p < 5000) return { label: 'Fair Price', color: 'bg-amber-500/20 border-amber-500/50', textColor: 'text-amber-700 dark:text-amber-400', icon: TrendingUp };
    return { label: 'Wait', color: 'bg-red-500/20 border-red-500/50', textColor: 'text-red-700 dark:text-red-400', icon: TrendingUp };
  };

  const status = getPriceStatus(price);
  const Icon = status.icon;

  return (
    <Card className={`p-8 rounded-2xl border ${status.color} bg-gradient-to-br from-transparent to-transparent`}>
      <div className="space-y-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-2">Estimated Fare</p>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">
              ₹{price.toLocaleString('en-IN')}
            </h3>
          </div>
          <Icon className={`w-8 h-8 ${status.textColor}`} />
        </div>

        <div className={`px-4 py-3 rounded-lg bg-card border ${status.color}`}>
          <p className={`text-sm font-semibold ${status.textColor}`}>{status.label}</p>
        </div>

        <div className="pt-4 border-t border-border space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Price Range</span>
            <span className="font-medium">₹{Math.max(price - 500, 1000).toLocaleString('en-IN')} - ₹{(price + 500).toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Prediction Confidence</span>
            <span className="font-medium">95%</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
