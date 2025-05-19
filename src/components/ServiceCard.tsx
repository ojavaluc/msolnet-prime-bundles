
import { Play } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  name: string;
  logo: string;
  description: string;
  color: string;
  features: string[];
}

const ServiceCard = ({ name, logo, description, color, features }: ServiceCardProps) => {
  return (
    <Card className="bg-card/60 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all overflow-hidden group">
      <div className={`h-1 w-full ${color}`}></div>
      <CardHeader className="p-6">
        <div className="flex justify-center mb-4">
          <img src={logo} alt={name} className="h-14 object-contain" />
        </div>
        <CardTitle className="text-xl text-center">{name}</CardTitle>
        <CardDescription className="text-center text-gray-400">{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Play size={16} className={`mr-2 mt-1 flex-shrink-0 ${color.replace('bg-', 'text-')}`} />
              <span className="text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className={`w-full h-32 -mb-6 opacity-5 blur-lg rounded-full ${color} transform group-hover:opacity-10 transition-opacity`}></div>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
