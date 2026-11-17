import './styles.css'

const currentYear = new Date().getFullYear()

export default function Footer () {
    return (
        <footer className="footer">
            <p> Lambão PetShop - Bahia</p>
            <p>&copy; {currentYear} - Todos os direitos</p>
        </footer>
    )
}
