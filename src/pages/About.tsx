
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BiographyTab } from "@/components/about/BiographyTab";
import { ProjectJourneyTab } from "@/components/about/ProjectJourneyTab";
import { PhilosophyTab } from "@/components/about/PhilosophyTab";
import { motion } from "framer-motion";

export default function About() {
  return (
    <PageTransition>
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/5"></div>
          <div className="absolute top-0 right-0 w-40 h-40 opacity-5">
            <pre className="text-primary font-mono text-[6px] leading-tight">
              {Array(15).fill(0).map(() => 
                Math.random() > 0.5 ? '10101001001010101001' : '01001010100101001010'
              ).join('\n')}
            </pre>
          </div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              heading="About Me"
              subheading="My Story"
            >
              <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
                Get to know me, my background, and what drives me as a developer.
              </p>
            </SectionHeading>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 max-w-4xl mx-auto glass rounded-xl p-1"
          >
            <Tabs defaultValue="bio" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-background/20 backdrop-blur-lg">
                <TabsTrigger value="bio" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/30 data-[state=active]:to-blue-500/30 data-[state=active]:backdrop-blur-md transition-all duration-300">Biography</TabsTrigger>
                <TabsTrigger value="journey" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/30 data-[state=active]:to-blue-500/30 data-[state=active]:backdrop-blur-md transition-all duration-300">Project Journey</TabsTrigger>
                <TabsTrigger value="philosophy" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/30 data-[state=active]:to-blue-500/30 data-[state=active]:backdrop-blur-md transition-all duration-300">Philosophy</TabsTrigger>
              </TabsList>
              
              <TabsContent value="bio" className="animate-fade-in px-4 pb-4">
                <BiographyTab />
              </TabsContent>
              
              <TabsContent value="journey" className="animate-fade-in px-4 pb-4">
                <ProjectJourneyTab />
              </TabsContent>
              
              <TabsContent value="philosophy" className="animate-fade-in px-4 pb-4">
                <PhilosophyTab />
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
