
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Mock data structure
interface BrandData {
  id: number;
  name: string;
  logo: string;
  image: string;
  regions: string;
  description: string;
}

interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  image: string;
}

const Admin = () => {
  const { toast } = useToast();
  
  // Brand management
  const [brands, setBrands] = useState<BrandData[]>([
    {
      id: 1,
      name: "AstralPool",
      logo: "https://example.com/astralpool-logo.png",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1280&auto=format&fit=crop",
      regions: "EUROPE · LATIN AMERICA · AFRICA · ASIA · OCEANIA",
      description: "Worldwide leading brand in the pool and wellness sector"
    },
    {
      id: 2,
      name: "Zodiac",
      logo: "https://example.com/zodiac-logo.png",
      image: "https://images.unsplash.com/photo-1622902046580-2e0cb8d9d6d4?q=80&w=800&auto=format&fit=crop",
      regions: "EUROPE · USA & CANADA · OCEANIA · AFRICA",
      description: "Zodiac® strives to deliver the perfect pool experience that enhances comfort, enjoyment and peace."
    }
  ]);
  
  // Slides management
  const [slides, setSlides] = useState<SlideData[]>([
    {
      id: 1,
      title: "Innovative Pool Solutions",
      subtitle: "Transform your backyard into a paradise with our cutting-edge pool technology",
      cta: "Explore Products",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1280&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Premium Spa Experience",
      subtitle: "Relax and rejuvenate with our state-of-the-art spa systems",
      cta: "Discover More",
      image: "https://images.unsplash.com/photo-1622902046580-2e0cb8d9d6d4?q=80&w=800&auto=format&fit=crop"
    }
  ]);
  
  // Selected item for editing
  const [selectedBrand, setSelectedBrand] = useState<BrandData | null>(null);
  const [selectedSlide, setSelectedSlide] = useState<SlideData | null>(null);
  
  // Form data for new items
  const [newBrand, setNewBrand] = useState<Omit<BrandData, 'id'>>({
    name: "",
    logo: "",
    image: "",
    regions: "",
    description: ""
  });
  
  const [newSlide, setNewSlide] = useState<Omit<SlideData, 'id'>>({
    title: "",
    subtitle: "",
    cta: "",
    image: ""
  });
  
  // Handlers for brands
  const handleEditBrand = (brand: BrandData) => {
    setSelectedBrand(brand);
  };
  
  const handleUpdateBrand = () => {
    if (selectedBrand) {
      setBrands(brands.map(brand => 
        brand.id === selectedBrand.id ? selectedBrand : brand
      ));
      setSelectedBrand(null);
      toast({
        title: "Brand updated",
        description: "The brand information has been successfully updated."
      });
    }
  };
  
  const handleAddBrand = () => {
    const id = Math.max(0, ...brands.map(b => b.id)) + 1;
    setBrands([...brands, { id, ...newBrand }]);
    setNewBrand({
      name: "",
      logo: "",
      image: "",
      regions: "",
      description: ""
    });
    toast({
      title: "Brand added",
      description: "A new brand has been successfully added."
    });
  };
  
  const handleDeleteBrand = (id: number) => {
    setBrands(brands.filter(brand => brand.id !== id));
    if (selectedBrand?.id === id) {
      setSelectedBrand(null);
    }
    toast({
      title: "Brand deleted",
      description: "The brand has been successfully removed."
    });
  };
  
  // Handlers for slides
  const handleEditSlide = (slide: SlideData) => {
    setSelectedSlide(slide);
  };
  
  const handleUpdateSlide = () => {
    if (selectedSlide) {
      setSlides(slides.map(slide => 
        slide.id === selectedSlide.id ? selectedSlide : slide
      ));
      setSelectedSlide(null);
      toast({
        title: "Slide updated",
        description: "The slide information has been successfully updated."
      });
    }
  };
  
  const handleAddSlide = () => {
    const id = Math.max(0, ...slides.map(s => s.id)) + 1;
    setSlides([...slides, { id, ...newSlide }]);
    setNewSlide({
      title: "",
      subtitle: "",
      cta: "",
      image: ""
    });
    toast({
      title: "Slide added",
      description: "A new slide has been successfully added."
    });
  };
  
  const handleDeleteSlide = (id: number) => {
    setSlides(slides.filter(slide => slide.id !== id));
    if (selectedSlide?.id === id) {
      setSelectedSlide(null);
    }
    toast({
      title: "Slide deleted",
      description: "The slide has been successfully removed."
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-brand-blue">Admin Dashboard</h1>
        
        <Tabs defaultValue="brands" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="brands">Brands Management</TabsTrigger>
            <TabsTrigger value="slides">Hero Slides</TabsTrigger>
          </TabsList>
          
          {/* Brands Management Tab */}
          <TabsContent value="brands">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Brands List */}
              <Card className="col-span-1 md:col-span-1">
                <CardHeader>
                  <CardTitle>Brands</CardTitle>
                  <CardDescription>Manage your brand portfolio</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {brands.map(brand => (
                    <div key={brand.id} className="flex items-center justify-between p-3 bg-white border rounded-md">
                      <div>
                        <p className="font-medium">{brand.name}</p>
                        <p className="text-sm text-gray-500 truncate">{brand.description.substring(0, 60)}...</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => handleEditBrand(brand)}>Edit</Button>
                        <Button variant="destructive" size="sm" onClick={() => handleDeleteBrand(brand.id)}>Delete</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              {/* Edit Brand Form */}
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>{selectedBrand ? 'Edit Brand' : 'Add New Brand'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Brand Name</label>
                    <Input 
                      value={selectedBrand ? selectedBrand.name : newBrand.name}
                      onChange={(e) => selectedBrand 
                        ? setSelectedBrand({...selectedBrand, name: e.target.value})
                        : setNewBrand({...newBrand, name: e.target.value})
                      }
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Logo URL</label>
                    <Input 
                      value={selectedBrand ? selectedBrand.logo : newBrand.logo}
                      onChange={(e) => selectedBrand 
                        ? setSelectedBrand({...selectedBrand, logo: e.target.value})
                        : setNewBrand({...newBrand, logo: e.target.value})
                      }
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Image URL</label>
                    <Input 
                      value={selectedBrand ? selectedBrand.image : newBrand.image}
                      onChange={(e) => selectedBrand 
                        ? setSelectedBrand({...selectedBrand, image: e.target.value})
                        : setNewBrand({...newBrand, image: e.target.value})
                      }
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Regions</label>
                    <Input 
                      value={selectedBrand ? selectedBrand.regions : newBrand.regions}
                      onChange={(e) => selectedBrand 
                        ? setSelectedBrand({...selectedBrand, regions: e.target.value})
                        : setNewBrand({...newBrand, regions: e.target.value})
                      }
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Description</label>
                    <Textarea 
                      value={selectedBrand ? selectedBrand.description : newBrand.description}
                      onChange={(e) => selectedBrand 
                        ? setSelectedBrand({...selectedBrand, description: e.target.value})
                        : setNewBrand({...newBrand, description: e.target.value})
                      }
                      rows={3}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  {selectedBrand ? (
                    <div className="flex space-x-2 w-full">
                      <Button className="flex-1" onClick={handleUpdateBrand}>Update Brand</Button>
                      <Button variant="outline" className="flex-1" onClick={() => setSelectedBrand(null)}>Cancel</Button>
                    </div>
                  ) : (
                    <Button className="w-full" onClick={handleAddBrand}>Add Brand</Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
          
          {/* Hero Slides Tab */}
          <TabsContent value="slides">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Slides List */}
              <Card className="col-span-1 md:col-span-1">
                <CardHeader>
                  <CardTitle>Hero Slides</CardTitle>
                  <CardDescription>Manage your homepage slides</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {slides.map(slide => (
                    <div key={slide.id} className="flex items-center justify-between p-3 bg-white border rounded-md">
                      <div>
                        <p className="font-medium">{slide.title}</p>
                        <p className="text-sm text-gray-500 truncate">{slide.subtitle.substring(0, 40)}...</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => handleEditSlide(slide)}>Edit</Button>
                        <Button variant="destructive" size="sm" onClick={() => handleDeleteSlide(slide.id)}>Delete</Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              {/* Edit Slide Form */}
              <Card className="col-span-1 md:col-span-2">
                <CardHeader>
                  <CardTitle>{selectedSlide ? 'Edit Slide' : 'Add New Slide'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Title</label>
                    <Input 
                      value={selectedSlide ? selectedSlide.title : newSlide.title}
                      onChange={(e) => selectedSlide 
                        ? setSelectedSlide({...selectedSlide, title: e.target.value})
                        : setNewSlide({...newSlide, title: e.target.value})
                      }
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subtitle</label>
                    <Textarea 
                      value={selectedSlide ? selectedSlide.subtitle : newSlide.subtitle}
                      onChange={(e) => selectedSlide 
                        ? setSelectedSlide({...selectedSlide, subtitle: e.target.value})
                        : setNewSlide({...newSlide, subtitle: e.target.value})
                      }
                      rows={2}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">CTA Text</label>
                    <Input 
                      value={selectedSlide ? selectedSlide.cta : newSlide.cta}
                      onChange={(e) => selectedSlide 
                        ? setSelectedSlide({...selectedSlide, cta: e.target.value})
                        : setNewSlide({...newSlide, cta: e.target.value})
                      }
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Image URL</label>
                    <Input 
                      value={selectedSlide ? selectedSlide.image : newSlide.image}
                      onChange={(e) => selectedSlide 
                        ? setSelectedSlide({...selectedSlide, image: e.target.value})
                        : setNewSlide({...newSlide, image: e.target.value})
                      }
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  {selectedSlide ? (
                    <div className="flex space-x-2 w-full">
                      <Button className="flex-1" onClick={handleUpdateSlide}>Update Slide</Button>
                      <Button variant="outline" className="flex-1" onClick={() => setSelectedSlide(null)}>Cancel</Button>
                    </div>
                  ) : (
                    <Button className="w-full" onClick={handleAddSlide}>Add Slide</Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
