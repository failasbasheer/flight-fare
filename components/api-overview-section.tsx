import { Card } from '@/components/ui/card';
import { Zap, Shield, Clock } from 'lucide-react';

export default function ApiOverviewSection() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get predictions in under 50ms with our optimized ML model',
    },
    {
      icon: Shield,
      title: 'Highly Accurate',
      description: '98% accuracy rate powered by advanced machine learning algorithms',
    },
    {
      icon: Clock,
      title: '24/7 Available',
      description: 'Reliable API with 99.9% uptime guarantee and instant responses',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Why Choose FarePredictor?</h2>
          <p className="text-lg text-muted-foreground text-balance">Built for developers and travel platforms that demand accuracy and reliability</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card key={idx} className="p-6 bg-background border-border rounded-xl hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
