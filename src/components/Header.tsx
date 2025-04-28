
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
        <a href="#" className="px-4 py-2 border border-input rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors">
          Авторизация
        </a>
      </div>
    </header>
  );
};

export default Header;
