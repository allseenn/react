import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div>
      <h1>О нас</h1>
        <p>Технологический стек нашей компании включает:</p>
        <p>Языки программирования: Ruby, PHP, JavaScript, SQL</p>
        <p>Фреймворки: Ruby on Rails, Laravel, Vue.js, Angular</p>
        <p>СУБД: PostgreSQL</p>
        <p>Брокеры сообщений: RabbitMQ, Kafka</p>
        <p>Инфраструктура: Kubernetes, Docker, nginx</p>
        <p>Мониторинг и логирование: Grafana, Kibana</p>
        <p>CI/CD: GitLab</p>
    </div>
  );
}

export default AboutPage;
