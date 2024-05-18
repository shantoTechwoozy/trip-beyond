import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SelectAge } from "../search-engine-select/select-age";
import { SelectEconomy } from "../search-engine-select/select-economy";

const Transportation: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start w-full lg:w-[660px] p-8 space-y-4 lg:space-y-0 lg:space-x-4">
      <Tabs defaultValue="oneWay" className="w-full lg:w-auto flex-grow">
        <TabsList className="flex justify-between space-x-5 lg:space-x-0">
          <TabsTrigger value="oneWay" className="flex-grow text-center">
            One Way
          </TabsTrigger>
          <TabsTrigger value="roundTrip" className="flex-grow text-center">
            Round Trip
          </TabsTrigger>
          <TabsTrigger value="multiCity" className="flex-grow text-center">
            Multi-City
          </TabsTrigger>
        </TabsList>
        <TabsContent value="oneWay">
          <Card className="border-none">
            <CardContent className="space-y-2 p-0">
              <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
                <div className="w-full lg:w-1/2">
                  <Label htmlFor="departure">Departure</Label>
                  <Input id="departure" />
                </div>
                <div className="w-full lg:w-1/2">
                  <Label htmlFor="arrival">Arrival</Label>
                  <Input id="arrival" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="roundTrip">
          <Card className="border-none">
            <CardContent className="space-y-2 p-0">
              <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
                <div className="w-full lg:w-1/2">
                  <Label htmlFor="departure">Departure</Label>
                  <Input id="departure" />
                </div>
                <div className="w-full lg:w-1/2">
                  <Label htmlFor="arrival">Arrival</Label>
                  <Input id="arrival" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="multiCity">
          <Card className="border-none">
            <CardContent className="space-y-2 p-0">
              <div className="flex flex-col space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0">
                <div className="w-full lg:w-1/2">
                  <Label htmlFor="departure1">Departure</Label>
                  <Input id="departure1" />
                </div>
                <div className="w-full lg:w-1/2">
                  <Label htmlFor="arrival1">Arrival</Label>
                  <Input id="arrival1" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-start lg:space-x-2 space-y-2 lg:space-y-0 w-full lg:w-auto p-1">
        <SelectAge />
        <SelectEconomy />
      </div>
    </div>
  );
};

export default Transportation;
