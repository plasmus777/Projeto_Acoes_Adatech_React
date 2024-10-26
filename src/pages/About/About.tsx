import ContactCard from "../../components/contactCard/ContactCard"

function About(){
    return (
        <>
            <div className="flex justify-center space-x-8 px-6 py-16">
                <div className="flex-col justify-center">
                    <p className="text-white text-4xl text-center">Sobre o projeto</p>
                    <p className="text-white text-2xl mt-12">O Projeto Ações AdaTech é uma aplicação Java desenvolvida com Spring Boot que facilita o gerenciamento de ativos financeiros, como ações, fundos imobiliários e renda fixa. O sistema permite que os usuários cadastrem seus investimentos e configurem alertas de compra e venda com base em variações nos valores dos ativos.</p>
                    <p className="text-white text-2xl mt-6">Este projeto foi criado para ajudar investidores a monitorar suas carteiras e tomar decisões estratégicas, definindo limites de preço personalizados.</p>
                    
                    <p className="text-white text-4xl text-center pt-28 pb-12">Funcionalidades</p>
                    <p className="text-white text-2xl mt-6 text-center">- 📈 **Cadastro de ativos**: Ações, fundos imobiliários e renda fixa.</p>
                    <p className="text-white text-2xl mt-6 text-center">- 🚨 **Alertas de preço**: Configure notificações para alertar sobre:</p>
                    <p className="text-white text-2xl mt-6 text-center">- Valor mínimo (indicado para compra).</p>
                    <p className="text-white text-2xl mt-6 text-center">- Valor máximo (indicado para venda).</p>
                    <p className="text-white text-2xl mt-6 text-center">- 📩 **Notificações automáticas**: Receba alertas por e-mail quando os ativos atingirem os limites configurados.</p>
                    <p className="text-white text-2xl mt-6 text-center">- 📊 **Relatórios diários**: Gere relatórios sobre a performance dos ativos cadastrados, auxiliando na análise de investimentos.</p>

                    <p className="text-white text-4xl text-center pt-28 pb-16">Desenvolvedores</p>
                    <div className="flex justify-center">
                        <ContactCard 
                            nome="Fernando Lopes"
                            nomeUsuario="plasmus777" 
                            imagem="https://avatars.githubusercontent.com/u/118869201?v=4" 
                            linkedin="https://www.linkedin.com/in/fernando-barbosa-ferreira-lopes/" 
                            github="https://github.com/plasmus777"
                        />
                        <ContactCard 
                            nome="Jonathan Eduardo de Oliveira"
                            nomeUsuario="jonathaneduardodeoliveira" 
                            imagem="https://avatars.githubusercontent.com/u/166248934?v=4" 
                            linkedin="https://www.linkedin.com/in/jonathaneduardodeoliveira/" 
                            github="https://github.com/jonathaneduardodeoliveira"
                        />
                        <ContactCard 
                            nome="Lucas Souza"
                            nomeUsuario="Luuqee" 
                            imagem="https://avatars.githubusercontent.com/u/176966073?v=4" 
                            linkedin="https://www.linkedin.com/in/lucas-souza-oliv/" 
                            github="https://github.com/Luuqee"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About