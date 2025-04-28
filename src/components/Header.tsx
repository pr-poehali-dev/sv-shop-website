
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b bg-background py-3 px-4 md:px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Логотип с градиентным текстом */}
        <Link to="/" className="text-xl font-bold gradient-text">
          SV SHOP
        </Link>

        {/* Навигационные ссылки */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/services" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Услуги
          </Link>
          <Link 
            to="/contacts" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Контакты
          </Link>
          <Link 
            to="/projects" 
            className="text-foreground hover:text-primary transition-colors"
          >
            Проекты
          </Link>
        </nav>

        {/* Кнопка авторизации */}
        <Button variant="outline" size="sm">
          Авторизация
        </Button>
      </div>
    </header>
  );
};

export default Header;
