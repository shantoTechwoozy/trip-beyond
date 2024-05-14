import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Flight: React.FC = () => {
  return (
    <Tabs defaultValue="oneWay" className="w-full md:w-[430px] p-8">
      <TabsList className="flex flex-wrap justify-between w-full">
        <TabsTrigger value="oneWay">One Way</TabsTrigger>
        <TabsTrigger value="roundTrip">Round Trip</TabsTrigger>
        <TabsTrigger value="multiCity">Multi-City</TabsTrigger>
      </TabsList>
      <TabsContent value="oneWay">
        <Card className="border-none">
          <CardHeader>
            <CardTitle>One Way</CardTitle>
            <CardDescription>
              Enter details for One Way trip here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <div className="w-full md:w-1/2">
                <Label htmlFor="departure">Departure</Label>
                <Input id="departure" />
              </div>
              <div className="w-full md:w-1/2">
                <Label htmlFor="arrival">Arrival</Label>
                <Input id="arrival" />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="roundTrip">
        <Card className="border-none">
          <CardHeader>
            <CardTitle>Round Trip</CardTitle>
            <CardDescription>
              Enter details for Round Trip here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <div className="w-full md:w-1/2">
                <Label htmlFor="departure">Departure</Label>
                <Input id="departure" />
              </div>
              <div className="w-full md:w-1/2">
                <Label htmlFor="arrival">Arrival</Label>
                <Input id="arrival" />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="multiCity">
        <Card className="border-none">
          <CardHeader>
            <CardTitle>Multi-City</CardTitle>
            <CardDescription>
              Enter details for Multi-City trip here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
              <div className="w-full md:w-1/2">
                <Label htmlFor="departure1">Departure</Label>
                <Input id="departure1" />
              </div>
              <div className="w-full md:w-1/2">
                <Label htmlFor="arrival1">Arrival</Label>
                <Input id="arrival1" />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Flight;
