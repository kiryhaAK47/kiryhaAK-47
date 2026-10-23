import Card from "@/components/Card";

export default function HomePage() {
return ( 
    <><div>
        <nav className="flex gap-80 padding-100">
            <h1 className="LOGO text-blue-600">BOXPACK</h1>
            <p>Услуги</p>
            <p>Как это работает</p>
            <p>Видеофиксация</p>
            <p>Калькулятор</p>
            <p>Кейсы</p>
            <p>Контакты</p>
        </nav>
    </div><div>
            <Card title="5000+" text="заказов в день" />
            <Card title="99.8%" text="точность сборки" />
            <Card title="FBO/FBS" text="все маркетплейсы" />
        </div></>
    );
}


