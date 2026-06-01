'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [status, setStatus] = useState<'IDLE' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [modalContent, setModalContent] = useState<'TERMOS' | 'PRIVACIDADE' | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const dados = new FormData(form);

    try {
      const resposta = await fetch('https://formspree.io/f/xwprynpz', {
        method: 'POST',
        body: dados,
        headers: { 'Accept': 'application/json' }
      });

      if (resposta.ok) {
        setStatus('SUCCESS');
        form.reset();
        setTimeout(() => setStatus('IDLE'), 6000);
      } else {
        setStatus('ERROR');
      }
    } catch (erro) {
      setStatus('ERROR');
    }
  };

  return (
    <div className="bg-slate-900 text-slate-100 min-h-screen font-sans scroll-smooth">
      
      {/* CABEÇALHO */}
      <header className="bg-slate-950/90 backdrop-blur text-white sticky top-0 z-50 shadow-lg border-b border-blue-900/30">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Logo JL Tecnologia Integrada" 
              width={45} 
              height={45} 
              className="object-contain"
            />
            <div className="text-xl font-black tracking-wider hidden sm:block">
              <span className="text-blue-500">JL</span> 
              <span className="text-slate-300 font-light text-sm border-l border-slate-700 pl-2 ml-2">TECNOLOGIA INTEGRADA</span>
            </div>
          </div>
          <nav>
            <ul className="flex items-center space-x-4 md:space-x-6 text-sm md:text-base">
              <li><a href="#sobre" className="text-slate-400 hover:text-blue-400 transition">Quem Somos</a></li>
              <li><a href="#servicos" className="text-slate-400 hover:text-blue-400 transition">Serviços</a></li>
              <li><a href="#projetos" className="text-slate-400 hover:text-blue-400 transition">Projetos</a></li>
              <li><a href="#depoimentos" className="text-slate-400 hover:text-blue-400 transition">Avaliações</a></li>
              <li><a href="#contato" className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md transition font-semibold shadow-md">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 py-28 text-center px-4 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="text-blue-500 font-bold uppercase tracking-widest text-xs md:text-sm bg-blue-950/50 px-3 py-1 rounded-full border border-blue-900/50">Soluções Inteligentes para o seu Negócio</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mt-6 mb-6 tracking-tight bg-gradient-to-r from-white via-slate-200 to-blue-400 bg-clip-text text-transparent">
            Infraestrutura de TI, Suporte e Automação
          </h1>
          <p className="text-base md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto font-light">
            Mais de 10 anos de experiência garantindo estabilidade, segurança e processos inteligentes para a tecnologia da sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contato" className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-md text-base shadow-lg shadow-blue-950 transition transform hover:-translate-y-0.5">
              Solicitar Orçamento Gratuito
            </a>
            <a href="https://wa.me/5581982066836?text=Olá João, vi seu site e gostaria de um orçamento para minha empresa!" target="_blank" className="bg-slate-800 hover:bg-slate-700 text-emerald-400 font-bold px-8 py-4 rounded-md text-base border border-slate-700 transition flex items-center justify-center gap-2">
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* QUEM SOMOS / SOBRE ME */}
      <section id="sobre" className="py-20 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 flex flex-col items-center text-center">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-2xl shadow-blue-500/20 bg-slate-950 flex items-center justify-center p-2">
            <Image 
              src="/logo.png" 
              alt="Logo Destaque JL Tecnologia" 
              width={180} 
              height={180} 
              className="object-contain"
            />
          </div>
          <h3 className="text-xl font-bold mt-4 text-white">João Luiz S. Junior</h3>
          <p className="text-sm text-blue-400">Especialista em TI & Desenvolvimento</p>
        </div>
        <div className="md:col-span-2 space-y-4 text-slate-300">
          <h2 className="text-3xl font-bold text-white border-b border-slate-800 pb-2">Quem Somos</h2>
          <p className="text-sm md:text-base leading-relaxed">
            A <strong>JL Tecnologia Integrada</strong> une conhecimento acadêmico em <strong>Análise e Desenvolvimento de Sistemas</strong> com uma sólida bagagem prática de mais de 10 anos de experiência em infraestrutura corporativa de TI.
          </p>
          <p className="text-sm md:text-base leading-relaxed">
            Oferecemos suporte técnico de alto nível, gestão inteligente de redes, implantação de sistemas de monitoramento por <strong>CFTV</strong>, segurança de pátio e automações de processos sob medida para verticais administrativas e de logística.
          </p>
        </div>
      </section>

      {/* SEÇÃO DE SERVIÇOS */}
      <section id="servicos" className="bg-slate-950 py-20 px-4 border-t border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Nossas Soluções Corporativas</h2>
            <p className="text-slate-400 text-sm md:text-base">Garantia de conformidade operacional, segurança de dados e eliminação de gargalos tecnológicos.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900/80 backdrop-blur p-8 rounded-lg border border-slate-800 hover:border-blue-500/50 transition duration-300 text-left flex flex-col justify-between">
              <div>
                <div className="text-3xl text-blue-500 mb-4">🖥️</div>
                <h3 className="text-lg font-bold mb-3 text-white">Infraestrutura & Redes</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Cabeamento estruturado, configuration de servidores Linux/Windows, gerenciamento de ativos de rede e segurança de dados.
                </p>
              </div>
              <div className="w-full h-32 relative rounded overflow-hidden opacity-60">
                <Image 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=400" 
                  alt="Data Center" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover" 
                />
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur p-8 rounded-lg border border-slate-800 hover:border-blue-500/50 transition duration-300 text-left flex flex-col justify-between">
              <div>
                <div className="text-3xl text-blue-500 mb-4">🛠️</div>
                <h3 className="text-lg font-bold mb-3 text-white">Suporte Técnico</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Atendimento ágil níveis 1 e 2 em Hardware e Software. Implantação e manutenção com foco na continuidade do seu negócio.
                </p>
              </div>
              <div className="w-full h-32 relative rounded overflow-hidden opacity-60">
                <Image 
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=400" 
                  alt="Suporte Técnico" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover" 
                />
              </div>
            </div>

            <div className="bg-slate-900/80 backdrop-blur p-8 rounded-lg border border-slate-800 hover:border-blue-500/50 transition duration-300 text-left flex flex-col justify-between">
              <div>
                <div className="text-3xl text-blue-500 mb-4">⚙️</div>
                <h3 className="text-lg font-bold mb-3 text-white">Automação & Sistemas</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Desenvolvimento em PHP, JavaScript e SQL. Automação de relatórios, dashboards e ferramentas focadas em Logística.
                </p>
              </div>
              <div className="w-full h-32 relative rounded overflow-hidden opacity-60">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400" 
                  alt="Dashboards" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE PROJETOS DESTACADOS */}
      <section id="projetos" className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-2">Sistemas de Sucesso</h2>
        <p className="text-slate-400 text-center mb-12 text-sm md:text-base">Exemplos práticos de ferramentas que criamos para impulsionar a inteligência do negócio.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-950 px-2 py-1 rounded">Case: Logística</span>
              <h3 className="text-xl font-bold mt-2 mb-3 text-white">Plataforma TRANSP | Logística & Gestão</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Painel operacional integrado para controle de acessos de pátio, acompanhamento de recebimentos e lançamento de cargas. Visibilidade total de KPIs táticos.
              </p>
            </div>
            <div className="w-full h-40 relative rounded overflow-hidden border border-slate-800">
              <Image 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600" 
                alt="Logística" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition duration-500" 
              />
            </div>
          </div>

          <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-950 px-2 py-1 rounded">Case: Finanças Operacionais</span>
              <h3 className="text-xl font-bold mt-2 mb-3 text-white">Sistema Inteligente de Fretes</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Desenvolvido para gestão rigorosa do fluxo de fretes, contendo cadastro por cidades, regras de reajuste dinâmico e relatórios estruturados de auditoria.
              </p>
            </div>
            <div className="w-full h-40 relative rounded overflow-hidden border border-slate-800">
              <Image 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600" 
                alt="Finanças e Gráficos" 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover grayscale hover:grayscale-0 transition duration-500" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO: AVALIAÇÃO DOS CLIENTES */}
      <section id="depoimentos" className="bg-slate-950/60 py-20 px-4 border-t border-b border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-2">O que dizem nossos clientes</h2>
          <p className="text-slate-400 mb-12 text-sm md:text-base">A confiança de quem vivencia a estabilidade tecnológica no dia a dia.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 flex flex-col justify-between">
              <div className="text-amber-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 text-sm italic mb-4">
                "O suporte da JL mudou nossa rotina operacional. Antes tínhamos quedas frequentes de rede que paravam o faturamento, hoje o ambiente é 100% estável."
              </p>
              <div>
                <h4 className="text-white font-bold text-sm">Ricardo Mendes</h4>
                <p className="text-xs text-slate-500">Diretor de Operações Administrativas</p>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 flex flex-col justify-between">
              <div className="text-amber-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 text-sm italic mb-4">
                "A customização do painel de logística eliminou as planilhas paralelas que geravam erros de lançamento. Uma automação fantástica sob medida."
              </p>
              <div>
                <h4 className="text-white font-bold text-sm">Marcos Silva</h4>
                <p className="text-xs text-slate-500">Supervisor de Distribuição & Logística</p>
              </div>
            </div>

            <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 flex flex-col justify-between">
              <div className="text-amber-400 mb-3">⭐⭐⭐⭐⭐</div>
              <p className="text-slate-300 text-sm italic mb-4">
                "Contratamos o serviço de reestruturação de servidores e câmeras de monitoramento (CFTV). Serviço ágil, limpo e de altíssima competência técnica."
              </p>
              <div>
                <h4 className="text-white font-bold text-sm">Carla Vasconcelos</h4>
                <p className="text-xs text-slate-500">Gerente Geral de Pátio Atacadista</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO DE CONTATO */}
      <section id="contato" className="bg-slate-950 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-2">Solicite uma Análise Técnico</h2>
          <p className="text-slate-400 text-center mb-12 text-sm md:text-base">Fale diretamente com nossa equipe técnica para desenhar a melhor infraestrutura para o seu negócio.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-4 text-sm text-slate-400">
              <div className="bg-slate-900 p-4 rounded-md border border-slate-800">
                <p className="text-xs uppercase text-slate-500 font-bold mb-1">E-mail Corporativo</p>
                <a href="mailto:joaoluizdev35@gmail.com" className="text-blue-400 hover:underline">joaoluizdev35@gmail.com</a>
              </div>
              <div className="bg-slate-900 p-4 rounded-md border border-slate-800">
                <p className="text-xs uppercase text-slate-500 font-bold mb-1">WhatsApp de Atendimento</p>
                <a href="https://wa.me/5581982066836" target="_blank" className="text-emerald-400 hover:underline">(81) 98206-6836</a>
              </div>
              <div className="bg-slate-900 p-4 rounded-md border border-slate-800">
                <p className="text-xs uppercase text-slate-500 font-bold mb-1">Canais de Atuação</p>
                <p className="text-slate-300 font-medium">Remoto ou Presencial</p>
              </div>
            </div>

            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nome" className="block text-xs font-bold text-slate-400 uppercase mb-1">Seu Nome</label>
                    <input type="text" id="nome" name="nome" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase mb-1">E-mail de Contato</label>
                    <input type="email" id="email" name="_replyto" className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-xs font-bold text-slate-400 uppercase mb-1">Como podemos ajudar a sua empresa?</label>
                  <textarea id="mensagem" name="mensagem" rows={4} className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm" required></textarea>
                </div>
                
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-6 rounded transition shadow-md text-sm uppercase tracking-wider">
                  Enviar Mensagem
                </button>

                {status === 'SUCCESS' && (
                  <div className="p-4 bg-emerald-950/80 border border-emerald-800 text-emerald-400 rounded-md text-sm">
                    <strong>✅ Mensagem Enviada!</strong> Sua solicitação foi encaminhada à JL Tecnologia. Entraremos em contato em breve.
                  </div>
                )}
                {status === 'ERROR' && (
                  <div className="p-4 bg-rose-950/80 border border-rose-800 text-rose-400 rounded-md text-sm">
                    <strong>❌ Erro ao enviar.</strong> Ocorreu uma falha no processamento. Se preferir, nos acione pelo WhatsApp!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-xs border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <p>&copy; 2026 JL Tecnologia Integrada. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <button onClick={() => setModalContent('TERMOS')} className="hover:text-blue-400 transition underline">
              Termos de Uso
            </button>
            <button onClick={() => setModalContent('PRIVACIDADE')} className="hover:text-blue-400 transition underline">
              Política de Privacidade
            </button>
          </div>
        </div>
      </footer>

      {/* MODAL INTERATIVO */}
      {modalContent && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto relative text-left shadow-2xl">
            <button onClick={() => setModalContent(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg font-bold">✕</button>
            
            {modalContent === 'TERMOS' ? (
              <div>
                <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">Termos de Uso</h3>
                <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
                  <p><strong>1. Aceitação dos Termos:</strong> Ao acessar o site da JL Tecnologia Integrada, você concorda em cumprir estes termos de serviço e todas as leis aplicáveis.</p>
                  <p><strong>2. Uso de Licença:</strong> O conteúdo deste site é de propriedade intelectual de João Luiz S. Junior. É proibida a reprodução para fins comerciais sem autorização.</p>
                  <p><strong>3. Prestação de Serviços:</strong> As informações têm caráter informativo de portfólio. Escopos técnicos de projetos de infraestrutura são definidos estritamente em contratos formais.</p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-bold text-white mb-4 border-b border-slate-800 pb-2">Política de Privacidade (LGPD)</h3>
                <div className="space-y-3 text-slate-400 text-sm leading-relaxed">
                  <p><strong>1. Coleta de Dados:</strong> Coletamos apenas as informações preenchidas voluntariamente no formulário de contato (Nome e E-mail).</p>
                  <p><strong>2. Finalidade:</strong> Esses dados são usados exclusivamente para responder ao seu contato e enviar as propostas solicitadas.</p>
                  <p><strong>3. Compartilhamento:</strong> A JL Tecnologia Integrada assume o compromisso de nunca vender ou compartilhar seus dados pessoais com terceiros.</p>
                </div>
              </div>
            )}
            <button onClick={() => setModalContent(null)} className="mt-6 bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-4 rounded w-full text-center transition">Fechar</button>
          </div>
        </div>
      )}

    </div>
  );
}