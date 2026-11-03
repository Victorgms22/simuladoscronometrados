import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen, Brain, ChartNoAxesCombined, Check, ClipboardList, Clock, FileCheck,
  GraduationCap, Headset, ShieldCheck, Smartphone, Stethoscope, Target, Timer, Trophy, Zap,
  type LucideIcon,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroImg from "@/assets/hero-mockup.jpg";
import offerImg from "@/assets/offer-mockup.jpg";

// Replace with the real checkout URL
const CHECKOUT_URL = "https://pay.cakto.com.br/33nb8t4_1265713";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "2 Simulados Cronometrados de Enfermagem | R$ 19,90" },
      { name: "description", content: "Teste seus conhecimentos com 2 simulados cronometrados de enfermagem. Treine para provas e concursos por apenas R$ 19,90." },
      { property: "og:title", content: "2 Simulados Cronometrados de Enfermagem" },
      { property: "og:description", content: "Pratique com cronômetro, revise conteúdos e treine para provas de enfermagem por R$ 19,90." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Item = { icon: LucideIcon; t: string; d: string };

const receber: Item[] = [
  { icon: ClipboardList, t: "Simulado 01", d: "Um conjunto de questões para testar seus conhecimentos em enfermagem." },
  { icon: FileCheck, t: "Simulado 02", d: "Um segundo desafio para continuar treinando e revisar seus conhecimentos." },
  { icon: Timer, t: "Cronômetro", d: "Treine sua capacidade de responder às questões dentro do tempo disponível." },
  { icon: Target, t: "Desafio de Conhecimento", d: "Teste seus conhecimentos com questões de enfermagem." },
  { icon: ChartNoAxesCombined, t: "Avalie seu Desempenho", d: "Utilize seus resultados para identificar conteúdos que merecem mais revisão." },
  { icon: Smartphone, t: "Acesso Digital", d: "Faça seus simulados pelo celular, tablet ou computador." },
];
const beneficios: Item[] = [
  { icon: Clock, t: "Controle do Tempo", d: "Aprenda a administrar melhor o tempo durante a resolução das questões." },
  { icon: Brain, t: "Fixação do Conteúdo", d: "Reforce os conhecimentos estudados por meio da prática." },
  { icon: ChartNoAxesCombined, t: "Identifique Dificuldades", d: "Perceba quais assuntos precisam de mais atenção durante sua preparação." },
  { icon: Trophy, t: "Mais Confiança", d: "Familiarize-se com a experiência de responder questões sob limite de tempo." },
];
const publico: Item[] = [
  { icon: GraduationCap, t: "Estudantes de Enfermagem", d: "Para quem deseja revisar conteúdos e testar o que aprendeu durante a graduação." },
  { icon: BookOpen, t: "Concurseiros", d: "Para quem está se preparando para concursos e processos seletivos na área de enfermagem." },
  { icon: Stethoscope, t: "Profissionais de Enfermagem", d: "Para quem deseja revisar conhecimentos e manter os estudos em dia." },
];
const seguranca: Item[] = [
  { icon: ShieldCheck, t: "Compra Segura", d: "Pagamento realizado por plataforma de checkout segura." },
  { icon: Zap, t: "Acesso Digital", d: "Receba as instruções de acesso após a confirmação do pagamento." },
  { icon: Headset, t: "Suporte", d: "Orientações para acessar seus simulados." },
];
const itensOferta = [
  "Simulado de Enfermagem 01", "Simulado de Enfermagem 02", "Experiência de resolução cronometrada",
  "Questões para testar seus conhecimentos", "Oportunidade de revisar seus pontos de dificuldade", "Acesso digital",
];
const faq = [
  ["Quantos simulados vou receber?", "Você receberá acesso a dois simulados cronometrados de enfermagem."],
  ["Os simulados possuem cronômetro?", "Sim! A proposta é permitir que você pratique a resolução das questões com controle de tempo."],
  ["Posso fazer pelo celular?", "Sim! Os simulados podem ser acessados pelo celular, tablet ou computador, conforme a compatibilidade da plataforma."],
  ["Para quem são indicados?", "São indicados para estudantes, concurseiros e profissionais de enfermagem que desejam testar seus conhecimentos."],
  ["Preciso fazer os dois simulados de uma vez?", "Não. Você poderá organizar sua prática de acordo com seu planejamento de estudos, respeitando as condições de acesso."],
  ["Como recebo o acesso?", "Após a confirmação do pagamento, você receberá as orientações para acessar os simulados."],
  ["Qual é o valor dos dois simulados?", "Você garante os dois simulados cronometrados pelo valor promocional de R$ 19,90, em pagamento único."],
];

const DECLINE_URL = "https://saenfermagem.lovable.app";

function Cta({ href = "#oferta", children }: { href?: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-center text-sm font-bold tracking-wide text-accent-foreground shadow-glow transition hover:-translate-y-0.5 hover:brightness-110 md:text-base">
      {children}
    </a>
  );
}

function DeclineButton() {
  return (
    <div className="mt-4 text-center">
      <a
        href={DECLINE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-muted-foreground underline underline-offset-4 transition hover:text-primary"
      >
        Não aceito essa oferta
      </a>
    </div>
  );
}

function Heading({ title, sub, light }: { title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className={`text-3xl font-bold md:text-4xl ${light ? "text-primary-foreground" : "text-primary"}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{sub}</p>}
    </div>
  );
}

function Card({ icon: Icon, t, d }: Item) {
  return (
    <div className="rounded-2xl bg-card p-7 shadow-card transition hover:-translate-y-1">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-accent">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-primary">{t}</h3>
      <p className="mt-2 text-muted-foreground">{d}</p>
    </div>
  );
}

function Index() {
  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="bg-hero text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="animate-fade-up">
            <span className="inline-block rounded-full border border-accent/50 bg-accent/15 px-4 py-1.5 text-xs font-semibold tracking-widest text-accent">
              PREPARE-SE PARA PROVAS DE ENFERMAGEM
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
              Teste seus conhecimentos com <span className="text-accent">2 Simulados Cronometrados</span> de Enfermagem!
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/85">
              Chega de estudar sem saber como está seu desempenho. Coloque seus conhecimentos à prova com dois simulados para treinar, revisar conteúdos e desenvolver sua gestão do tempo.
            </p>
            <p className="mt-4 text-primary-foreground/70">
              Simule a experiência de uma prova real, desafie seus conhecimentos e descubra quais conteúdos precisam de mais atenção.
            </p>
            <div className="mt-8"><Cta>QUERO FAZER OS 2 SIMULADOS</Cta></div>
          </div>
          <img src={heroImg} alt="Simulados de enfermagem em notebook, tablet e celular com cronômetro" width={1280} height={1024} className="animate-fade-up rounded-3xl shadow-glow" />
        </div>
      </section>

      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Heading title="O que você vai receber?" sub="Dois desafios para colocar seus conhecimentos em prática e treinar sua preparação." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{receber.map((c) => <Card key={c.t} {...c} />)}</div>
          <div className="mt-12 text-center"><Cta>QUERO COMEÇAR A TREINAR</Cta></div>
        </div>
      </section>

      <section className="bg-muted px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Heading title="Por que fazer simulados cronometrados?" sub="Estudar também é praticar. Treine seus conhecimentos e desenvolva mais confiança para enfrentar provas." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{beneficios.map((c) => <Card key={c.t} {...c} />)}</div>
        </div>
      </section>

      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Heading title="Para quem são os simulados?" sub="Uma oportunidade de praticar e testar seus conhecimentos em enfermagem." />
          <div className="grid gap-6 md:grid-cols-3">{publico.map((c) => <Card key={c.t} {...c} />)}</div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="bg-hero px-6 py-20 text-primary-foreground">
        <div className="mx-auto max-w-6xl">
          <Heading light title="Leve os 2 Simulados Cronometrados!" sub="Dois desafios para testar seus conhecimentos e treinar sua preparação para provas de enfermagem." />
          <div className="grid items-center gap-10 md:grid-cols-2">
            <img src={offerImg} alt="Dois simulados digitais de enfermagem com cronômetro" width={1024} height={1024} loading="lazy" className="rounded-3xl shadow-glow" />
            <div className="rounded-3xl bg-card p-8 text-card-foreground shadow-card md:p-10">
              <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-bold tracking-widest text-accent-foreground">OFERTA ESPECIAL</span>
              <h3 className="mt-4 text-2xl font-bold text-primary">Combo 2 Simulados Cronometrados de Enfermagem</h3>
              <p className="mt-2 text-muted-foreground">Acesso digital a dois simulados para praticar seus conhecimentos.</p>
              <ul className="mt-6 space-y-3">
                {itensOferta.map((i) => (
                  <li key={i} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />{i}</li>
                ))}
              </ul>
              <div className="mt-8 border-t border-border pt-6 text-center">
                <div className="font-display text-5xl font-bold text-primary">R$ 19,90</div>
                <p className="mt-1 text-sm text-muted-foreground">Pagamento único · Valor total pelos dois simulados.</p>
                <div className="mt-6"><Cta href={CHECKOUT_URL}>QUERO OS 2 SIMULADOS POR R$ 19,90</Cta></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <Heading title="Sua compra com tranquilidade" />
          <div className="grid gap-6 md:grid-cols-3">{seguranca.map((c) => <Card key={c.t} {...c} />)}</div>
        </div>
      </section>

      <section className="bg-background px-6 pb-20">
        <div className="mx-auto max-w-3xl">
          <Heading title="Dúvidas frequentes" />
          <Accordion type="single" collapsible className="space-y-3">
            {faq.map(([q, a], i) => (
              <AccordionItem key={q} value={`f${i}`} className="rounded-2xl border-none bg-card px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-primary">{q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="bg-hero px-6 py-20 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Chegou a hora de colocar seus conhecimentos à prova!</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">
            Não fique apenas na teoria. Pratique, desafie seus conhecimentos e treine seu tempo com dois simulados de enfermagem por apenas R$ 19,90.
          </p>
          <div className="mt-8"><Cta href={CHECKOUT_URL}>GARANTIR OS 2 SIMULADOS POR R$ 19,90</Cta></div>
        </div>
      </section>

      <footer className="bg-primary px-6 py-8 text-center text-sm text-primary-foreground/70">
        <p>Material educativo complementar. Não representa garantia de aprovação em concursos ou processos seletivos.</p>
        <nav className="mt-4 flex justify-center gap-6">
          <a href="#" className="hover:text-accent">Política de Privacidade</a>
          <a href="#" className="hover:text-accent">Termos de Uso</a>
          <a href="#" className="hover:text-accent">Contato</a>
        </nav>
      </footer>
    </main>
  );
}
