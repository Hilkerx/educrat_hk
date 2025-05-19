import React from "react";

export default function Instractor() {
  return (
    <div id="instructors" className="pt-60 lg:pt-40">
      <h2 className="text-20 fw-500">Instrutor</h2>

      <div className="mt-30">
        <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
          <div className="size-120">
            <img
              className="object-cover"
              src="/assets/img/misc/verified/1.png"
              alt="imagem"
            />
          </div>

          <div className="">
            <h5 className="text-17 lh-14 fw-500">Carlos Silva</h5>
            <p className="mt-5">Presidente de Vendas</p>

            <div className="d-flex x-gap-20 y-gap-10 flex-wrap items-center pt-10">
              <div className="d-flex items-center">
                <div className="d-flex items-center mr-8">
                  <div className="icon-star text-11 text-yellow-1"></div>
                  <div className="text-14 lh-12 text-yellow-1 ml-5">4.5</div>
                </div>
                <div className="text-13 lh-1">Avaliação do Instrutor</div>
              </div>

              <div className="d-flex items-center text-light-1">
                <div className="icon-comment text-13 mr-8"></div>
                <div className="text-13 lh-1">23.987 Avaliações</div>
              </div>

              <div className="d-flex items-center text-light-1">
                <div className="icon-person-3 text-13 mr-8"></div>
                <div className="text-13 lh-1">692 Estudantes</div>
              </div>

              <div className="d-flex items-center text-light-1">
                <div className="icon-wall-clock text-13 mr-8"></div>
                <div className="text-13 lh-1">15 Cursos</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-30">
          <p>
            Em 2010, comecei a IntegraEdu com o desejo de criar aplicativos envolventes
            e atraentes. Por mais de 7 anos, projetei muitos aplicativos web e para
            iPhone de alto perfil. Os aplicativos variam de aplicações médicas 3D a
            ferramentas de gerenciamento de projetos para indústrias específicas.
            <br />
            <br />
            Também sou fundador de uma grande organização local de design, Designers
            de São Paulo, onde eu e outros influenciadores locais ajudamos a cultivar
            os talentos de novos designers de UX por meio de workshops e discussões
            em painéis.
          </p>
        </div>
      </div>
    </div>
  );
}
