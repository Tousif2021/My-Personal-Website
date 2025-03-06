
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiographyTab } from "@/components/about/BiographyTab";
import { ProjectJourneyTab } from "@/components/about/ProjectJourneyTab";
import { PhilosophyTab } from "@/components/about/PhilosophyTab";

export default function About() {
  return (
    <PageTransition>
      <section className="pt-24 pb-12">
        <div className="container max-w-7xl mx-auto px-6 md:px-8">
          <SectionHeading 
            heading="About Me"
            subheading="My Story"
          >
            <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
              Get to know me, my background, and what drives me as a developer.
            </p>
          </SectionHeading>

          <div className="mt-16 max-w-4xl mx-auto">
            <Tabs defaultValue="bio" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12">
                <TabsTrigger value="bio">Biography</TabsTrigger>
                <TabsTrigger value="journey">Project Journey</TabsTrigger>
                <TabsTrigger value="philosophy">Philosophy</TabsTrigger>
              </TabsList>
              
              <TabsContent value="bio" className="animate-fade-in">
                <BiographyTab />
              </TabsContent>
              
              <TabsContent value="journey" className="animate-fade-in">
                <ProjectJourneyTab />
              </TabsContent>
              
              <TabsContent value="philosophy" className="animate-fade-in">
                <PhilosophyTab />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
