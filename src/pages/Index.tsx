
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto py-8 px-4">
        <div className="text-center max-w-2xl mx-auto mt-12">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Добро пожаловать в <span className="gradient-text">SV SHOP</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Личный сайт с информацией и интернет-магазин
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
