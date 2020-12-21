<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="CuestionarioImpactoMedio.aspx.cs" Inherits="MIR.CuestionarioImpactoMedio" %>



<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
</asp:Content>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">
   

<form class='formsave'>
        <div class='form-group'> 
            <div class='form-block same-group'>                  
                <h2>Cuestionario de Impacto Moderado</h2>
                <br />
                <div class='form-group'> 
                    <div class='row'>
                        <div class='col-lg-12'>
                            <label class='text-uppercase'>Definición del problema y objetivos generales de la regulación <span class='required'></span></label>
                        </div>
                    </div> 
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='AltoImpactoq1' disabled>Describa los objetivos generales de la regulación propuesta</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textAltoImpactoq1' name="textAltoImpactoq1" placeholder='....' required></textarea>
                        </div>
                    </div> 
                   <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='AltoImpactoq2' disabled>Describa la problemática o situación que da origen a la intervención gubernamental a través de la regulación propuesta</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textAltoImpactoq2' name="textAltoImpactoq2" placeholder='....' required></textarea>
                        </div>
                    </div> 
                   <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='4' class='form-control mediumbold normaltext' id='AltoImpactoq3' disabled>Indique el tipo de ordenamiento jurídico propuesto. Asimismo, señale si existen disposiciones jurídicas vigentes directamente aplicables a la problemática materia del anteproyecto, enumérelas y explique por qué son insuficientes para atender la problemática identificada</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textAltoImpactoq3' name="textAltoImpactoq3"  placeholder='....' required></textarea>
                        </div>
                    </div> 
                     <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='2' class='form-control mediumbold normaltext' id='AltoImpactoq4' disabled>Disposiciones jurídicas vigentes</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textAltoImpactoq4' name="textAltoImpactoq4"  placeholder='....' required></textarea>
                        </div>
                    </div> 
                </div>
                <br />
                <div class='form-group'> 
                    <div class='row'>
                        <div class='col-lg-12'>
                            <label class='text-uppercase'>Identificación de las posibles alternativas a la regulación <span class='required'></span></label>
                        </div>
                    </div> 
                                        <!-- Editable table -->
                    <div class="card">
                        <h5 class="card-header text-center font-weight-bold  py-4">Señale y compare las alternativas con que se podría resolver la problemática que fueron evaluadas, incluyendo la opción de no emitir la regulación. Asimismo, indique para cada una de las alternativas consideradas una estimación de los costos y beneficios que implicaría su instrumentación</h5>
                        <div class="card-body">
                            <div id="tableAlternativas" class="table-editable" style="word-break: break-all">
                                <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></a></span>
                                <table class="table table-bordered table-responsive-md table-striped text-center">
                                    <tr>
                                        <th class="text-center"  style="width:50%"><h6><strong>Alternativas</strong></h6></th>
                                        <th class="text-center"  style="width:50%"><h6><strong>Descripción de las alternativas y estimación de los costos y beneficios</strong></h6></th>

                                    </tr>
                                    <tr>
                                        <td class="pt-3-half text-left" ><h6> No emitir regulación alguna</h6> </td>
                                        <td class="pt-3-half" id="tdAlternativas1" contenteditable="true"></td>
                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" ><h6>Esquemas de autorregulación</h6></td>
                                        <td class="pt-3-half" id="tdAlternativas2" contenteditable="true"></td>
                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" ><h6>Esquemas voluntarios</h6></td>
                                        <td class="pt-3-half" id="tdAlternativas3" contenteditable="true"></td>
                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" ><h6>Incentivos económicos</h6></td>
                                        <td class="pt-3-half" id="tdAlternativas4" contenteditable="true"></td>
                                    </tr>
                                    <tr>
                                        <td class="pt-3-half  text-left" ><h6>Otro tipo de regulación</h6></td>
                                        <td class="pt-3-half" id="tdAlternativas5" contenteditable="true"></td>
                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" ><h6>Otras</h6></td>
                                        <td class="pt-3-half" id="tdAlternativas6" contenteditable="true"></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- Editable table -->

                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='2' class='form-control mediumbold normaltext' id='AltoImpactoq7' disabled>Justifique las razones por las que la regulación propuesta es considerada la mejor opción para atender la problemática señalada</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textAltoImpactoq7' name="textAltoImpactoq7" placeholder='....' required></textarea>
                        </div>
                    </div>            

                      <br />


                    <!-- Editable table -->
                    <div class="card">
                        <h5 class="card-header text-center font-weight-bold  py-4">¿La regulación propuesta crea, modifica o elimina trámites?</h5>
                        <div id="bodytable" class="card-body">
                            <div class="table-editable tableadd"  style="word-break: break-all">
                                <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></a></span>
                                <table class="table table-bordered table-responsive-md table-striped text-center">

                                    <tr> 
                                        <td class="text-center"  style="width:20%"><h6><strong>Acción </strong></h6></td>
                                        <td > <select class="form-control cboAccion"  name="cboAccion" required></select></td>
                                    </tr>

                                    <tr>
                                        <td class="text-center"  style="width:20%"><h6><strong>Nombre del Trámite</strong></h6></td>
                                        <td class="pt-3-half "  > <textarea rows='2' class='form-control Nombre' name="Nombre" placeholder='....' required></textarea></td>
                                    </tr>

                                    <tr>
                                       <td class="text-center"  style="width:20%"><h6><strong>Tipo</strong></h6></td>
                                       <td class="pt-3-half " ><textarea rows='2' class='form-control Tipo' name='Tipo' placeholder='....' required></textarea></td>
                                    </tr>

                                    <tr>
                                       <td class="text-center"  style="width:20%"><h6><strong>Vigencia</strong></h6></td>
                                       <td class="pt-3-half " ><textarea rows='2' class='form-control Vigencia' name='Vigencia' placeholder='....' required></textarea></td>
                                    </tr>
                                    <tr> 
                                        <td class="text-center"  style="width:20%"><h6><strong>Medio de presentación</strong></h6></td>
                                        <td class="pt-3-half " ><textarea rows='2' class='form-control Medio'name='Medio'  placeholder='....' required></textarea></td>
                                    </tr>

                                    <tr>
                                        <td class="text-center"  style="width:20%"><h6><strong>Requisitos</strong></h6></td>
                                        <td class="pt-3-half "  ><textarea rows='2' class='form-control Requisitos'name='Requisitos'  placeholder='....' required></textarea></td>
                                    </tr>

                                    <tr>
                                       <td class="text-center"  style="width:20%"><h6><strong>Población a la que impacta</strong></h6></td>
                                       <td class="pt-3-half "  ><textarea rows='2' class='form-control Poblacion' name='Poblacion' placeholder='....' required></textarea></td>
                                    </tr>

                                    <tr>
                                      <td class="text-center"  style="width:20%"><h6><strong>Ficta</strong></h6></td>
                                      <td class="pt-3-half "  ><textarea rows='2' class='form-control Ficta' name='Ficta' placeholder='....' required></textarea></td>
                                    </tr>

                                    <tr>
                                       <td class="text-center"  style="width:20%"><h6><strong>Plazo</strong></h6></td>
                                        <td class="pt-3-half "  ><textarea rows='2' class='form-control Plazo' name='Plazo' placeholder='....' required></textarea></td>
                                    </tr>

                                    <tr>
                                       <td class="text-center"  style="width:20%"><h6><strong>Homoclave</strong></h6></td>
                                       <td class="pt-3-half "  ><textarea rows='2' class='form-control Homoclave' name='Homoclave' placeholder='....' required></textarea></td>
                                    </tr>

                                    <tr>
                                      <td class="text-center"  style="width:20%"><h6><strong>Justificación</strong></h6></td>
                                      <td class="pt-3-half "  ><textarea rows='2' class='form-control Justificacion' name='Justificacion' placeholder='....' required></textarea></td>
                                    </tr>
                                    <tr>
                                     <td class="text-center" id="btnaddtabla" style="width:10%"> <button type='button' class='btn btn-success'onclick="VerificarNewTable()" title="Agregar Una Nueva Tabla" id='btnAddTabla'><span class='glyphicon glyphicon-plus'></span></button> </td>

                                    </tr>

                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- Editable table -->
                    <br />
                    <!-- Editable table -->
                    <div class="card">
                        <h5 class="card-header text-center font-weight-bold  py-4">Comente las disposiciones, obligaciones y acciones distintas a los trámites que correspondan a la propuesta</h5>
                        <div class="card-body">
                            <div id="tableDisposiciones" class="table-editable" style="word-break: break-all">
                                <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></a></span>
                                <table class="table table-bordered table-responsive-md table-striped text-center">
                                    <tr>
                                        <th class="text-center"  style="width:20%"><h6><strong>Disposiciones, Acciones u Obligaciones</strong></h6></th>
                                        <th class="text-center"  style="width:20%"><h6><strong>Articulos Aplicables</strong></h6></th>
                                        <th class="text-center"  style="width:20%"><h6><strong>Costos</strong></h6></th>
                                        <th class="text-center"  style="width:20%"><h6><strong>Grupo o industria al que le impacta la regulación</strong></h6></th>
                                        <th class="text-center" style="width:20%"><h6><strong>Justificación</strong></h6></th>

                                    </tr>
                                    <tr>
                                        <td class="pt-3-half text-left" ><h6>Establecen requisitos</h6> </td>
                                        <td class="pt-3-half"  id="tdDisposicones1" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones2" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones3" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones4" contenteditable="true"></td>
                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" ><h6>Establecen sanciones</h6></td>
                                        <td class="pt-3-half"  id="tdDisposicones5" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones6" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones7" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones8" contenteditable="true"></td>
                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" > <h6>Establecen restricciones</h6></td>
                                        <td class="pt-3-half"  id="tdDisposicones9" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones10" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones11" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones12" contenteditable="true"></td>
                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" > <h6>Establecen prohibiciones</h6></td>
                                        <td class="pt-3-half"  id="tdDisposicones13" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones14" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones15" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones16" contenteditable="true"></td>
                                    </tr>
                                    <tr>
                                        <td class="pt-3-half  text-left" > <h6>Establecen Obligaciones</h6></td>
                                        <td class="pt-3-half"  id="tdDisposicones37" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones38" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones39" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones40" contenteditable="true"></td>
                                    </tr>
                                    <tr>
                                        <td class="pt-3-half  text-left" ><h6>Condicionan un beneficio</h6></td>
                                        <td class="pt-3-half"  id="tdDisposicones17" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones18" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones19" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones20" contenteditable="true"></td>
                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" ><h6>Condicionan una concesión</h6></td>
                                        <td class="pt-3-half"  id="tdDisposicones21" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones22" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones23" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones24" contenteditable="true"></td>
                                    </tr>
                                    <tr>
                                        <td class="pt-3-half  text-left" ><h6>Establecen o modifican estándares técnicos</h6></td>
                                        <td class="pt-3-half"  id="tdDisposicones25" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones26" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones27" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones28" contenteditable="true"></td>
                                    </tr>
                                    <tr>
                                        <td class="pt-3-half  text-left" ><h6>Establecen procedimientos de evaluación de conformidad</h6></td>
                                        <td class="pt-3-half"  id="tdDisposicones29" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones30" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones31" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones32" contenteditable="true"></td>
                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" ><h6>Otras</h6></td>
                                        <td class="pt-3-half"  id="tdDisposicones33" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones34" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones35" contenteditable="true"></td>
                                        <td class="pt-3-half"  id="tdDisposicones36" contenteditable="true"></td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- Editable table -->
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='2' class='form-control mediumbold normaltext' id='AltoImpactoq8' disabled>¿La propuesta de regulación contempla esquemas que impactan de manera diferenciada a sectores industria o agentes económicos? (ejemplo a las micro, pequeñas o medianas empresas)</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textAltoImpactoq8' name="textAltoImpactoq8" placeholder='....' required></textarea>
                        </div>
                    </div> 

                    <br />
                    <!-- Editable table -->
                    <div class="card">
                        <h5 class="card-header text-center font-weight-bold  py-4">Proporcione la estimación de los costos y beneficios que supone la regulación para cada particular, grupo de particulares o industria</h5>
                        <div class="card-body">
                            <div id="tableCostos" class="table-editable" style="word-break: break-all">
                                <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></a></span>
                                <table class="table table-bordered table-responsive-md table-striped text-center">
                                    <tr>
                                        <th class="text-center" style="width:12%" ></th>
                                        <th class="text-center" style="width:12%"><h6><strong>Único $</strong></h6></th>
                                        <th class="text-center" style="width:12%"><h6><strong>Indique el grupo o industria al que impacta la regulación</strong></h6></th>
                                        <th class="text-center" style="width:12%"><h6><strong>Describa de manera general los costos y beneficios que implica la regulación propuesta</strong></h6></th>
                                        <th class="text-center" style="width:12%"><h6><strong>Promedio $</strong></h6></th>
                                        <th class="text-center" style="width:12%"><h6><strong>Anual</strong></h6></th>
                                        <th class="text-center" style="width:12%"><h6><strong>Proporcione la estimación monetizada de los costos y beneficios que implica la regulación</strong></h6></th>
                                        <th class="text-center" style="width:12%"><h6><strong>Costo total (Valor presente)$</strong></h6></th>
                                    </tr>
                                    <tr>
                                        <td class="pt-3-half text-left" ><h6>Costos</h6></td>
                                        <td class="pt-3-half" id="tdCostos1" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos2" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos3" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos4" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos5" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos6" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos7" contenteditable="true"></td>
                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" ><h6>Beneficios</h6></td>
                                        <td class="pt-3-half" id="tdCostos8" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos9" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos10" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos11" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos12" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos13" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos14" contenteditable="true"></td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- Editable table -->
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='2' class='form-control mediumbold normaltext' id='AltoImpactoq9' disabled>Justifique que los beneficios de la regulación son superiores a sus costos</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textAltoImpactoq9'  name="textAltoImpactoq9"  placeholder='....' required></textarea>
                        </div>
                    </div>
                                       
                </div> 

                 <div class='form-group'> 
                    <div class='row'>
                        <div class='col-lg-12'>
                            <label class='text-uppercase'>Cumplimiento y aplicación de la propuesta <span class='required'></span></label>
                        </div>
                    </div> 
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='AltoImpactoq10' disabled>Describa la forma y/o los mecanismos a través de los cuales se implementará la regulación (incluya recursos públicos)</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textAltoImpactoq10'  name="textAltoImpactoq10" placeholder='....' required></textarea>
                        </div>
                    </div> 
                </div>


                <div class='form-group'> 
                    <div class='row'>
                        <div class='col-lg-12'>
                            <label class='text-uppercase'>Evaluación de la propuesta <span class='required'></span></label>
                        </div>
                    </div> 
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='AltoImpactoq11' disabled>Describa la forma y los medios a través de los cuales se evaluará el logro de los objetivos de la regulación</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textAltoImpactoq11'  name="textAltoImpactoq11" placeholder='....' required></textarea>
                        </div>
                    </div>
                </div>

                <div class='form-group'> 
                    <div class='row'>
                        <div class='col-lg-12'>
                            <label class='text-uppercase'>Consulta Pública<span class='required'></span></label>
                        </div>
                    </div> 
                    <!-- Editable table -->
                    <div class="card">
                        <h5 class="card-header text-center font-weight-bold  py-4">Se consultó a las partes y/o grupos interesados para la elaboración de la regulación</h5>
                        <div class="card-body">
                            <div id="tablaConsultaPublica" class="table-editable"  style="word-break: break-all">
                                <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></a></span>
                                <table class="table table-bordered table-responsive-md table-striped text-center">
                                    <tr>
                                        <th class="text-center" style="width:33%"></th>
                                        <th class="text-center" style="width:33%"><h6><strong>Particular</strong></h6></th>
                                        <th class="text-center" style="width:33%"><h6><strong>Opinión</strong></h6></th>
                                    </tr>
                                    <tr>
                                        <td class="pt-3-half text-left" ><h6>Formación de grupo de trabajo/comité técnico para la elaboración conjunta del anteproyecto</h6></td>
                                        <td class="pt-3-half" id="tdConsulta1" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdConsulta2" contenteditable="true"></td>

                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" ><h6>Circulación del borrador a grupos o personas interesadas y recepción de comentarios</h6></td>
                                        <td class="pt-3-half" id="tdConsulta3" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdConsulta4" contenteditable="true"></td>

                                    </tr>
                                    <tr>
                                        <td class="pt-3-half text-left" ><h6>Seminario/conferencia por invitación</h6></td>
                                        <td class="pt-3-half" id="tdConsulta5" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdConsulta6" contenteditable="true"></td>
                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" ><h6>Seminario/conferencia abierto al público</h6></td>
                                        <td class="pt-3-half" id="tdConsulta7" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdConsulta8" contenteditable="true"></td>

                                    </tr>
                                     <tr>
                                        <td class="pt-3-half text-left" ><h6>Recepción de comentarios no solicitados</h6></td>
                                        <td class="pt-3-half" id="tdConsulta9" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdConsulta10" contenteditable="true"></td>

                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" ><h6>Consulta intra-gubernamental</h6></td>
                                        <td class="pt-3-half" id="tdConsulta11" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdConsulta12" contenteditable="true"></td>

                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" ><h6>Consulta con autoridades internacionales o de otros países</h6></td>
                                        <td class="pt-3-half" id="tdConsulta13" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdConsulta14" contenteditable="true"></td>

                                    </tr>
                                     <tr>
                                        <td class="pt-3-half text-left" ><h6>Otros</h6></td>
                                        <td class="pt-3-half" id="tdConsulta15" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdConsulta16" contenteditable="true"></td>

                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- Editable table -->
                </div>

                 <div class='form-group'> 
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='2' class='form-control mediumbold normaltext' id='AltoImpactoq13' disabled>Indique las propuestas que se incluyeron en la regulación como resultado de las consultas realizadas</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textAltoImpactoq13'  name="textAltoImpactoq13" placeholder='....' required></textarea>
                        </div>
                    </div>
                </div>
                     <div class='row'> 
                        <div class='col-lg-10'> 
                        </div> 
                        <div class='col-lg-1'> 
                            <label class='text-uppercase'>SI</label> 
                        </div> 
                        <div class='col-lg-1'> 
                            <label class='text-uppercase'>NO</label> 
                        </div> 
                    </div> 
                <div class='row'> 
                    <div class='col-lg-10'> 
                        <Input disabled class='form-control normaltext' id='idPublicacion' value='Requiere que este proyecto NO sea publicado' /> 
                    </div> 
                    <div class='col-lg-1'> 
                        <Input type ='radio' class='checkbox rb1' id='checkConsultaPublica' name='check5' value='true' /> 
                    </div> 
                    <div class='col-lg-1'> 
                        <Input type ='radio' class='checkbox rb1' id='check52' name='check5'  value='false' /> 
                    </div> 
                </div> 

                 <div class='row' id="areajustificacion" style="display:none"> 

                    <div class="col-lg-6"> 
                        <textarea rows="4" class="form-control normaltext" id="textareajustificacion" name="textareajustificacion" placeholder="Argumente Su Elección" ></textarea>
                        <br>
                    </div> 

                </div> 

                <div class='row'> 
                    <div class='col-lg-10'> 
                        <Input disabled class='form-control normaltext' id='idConstancia' value='Indicar si se requiere la Constancia de Publicidad' /> 
                    </div> 
                    <div class='col-lg-1'> 
                        <Input type ='radio' class='checkbox rb2' id='checkConstanciaPublicidad' name='check6' value= true /> 
                    </div> 
                    <div class='col-lg-1'> 
                        <Input type ='radio' class='checkbox rb2' id='check62' name='check6'  value= false /> 
                    </div> 
                </div> 
                 <div class="col-lg-12">
                    <h2>Archivos Adjuntos</h2>

                    <div class="row">
                        <div class="col-lg-6">
                            <input type="file" class="form-control-file" id="fileUpload"  accept=".pdf"  max-size=10096000  >
                        </div>
                        <div class="col-lg-6">
                            <label>Archivos Cargados</label>
                            <ul class="files-list">

                            </ul>
                        </div>
                        <div class="col-lg-12">
                            <button type="button" id="btnUploadFile"class="btn btn-success"> <span class="glyphicon glyphicon-floppy-disk"></span> Cargar Archivos</button>
                        </div>
                    </div>
                </div>
                                       

             </div>
        </div>
           
</form>


        <div class='actions-group col-lg-12'> 
            <button type='button' class='btn btn-success' id='btnGuardar'><span class='glyphicon glyphicon-ok'></span> Guardar</button> 
            <button type='button' class='btn btn-primary' id='btnAutorizar'><span class='glyphicon glyphicon-file'></span> Autorizar</button>  
        </div> 
</asp:Content>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="scripts" runat="server">
    <script src="Scripts/ScriptForm/CuestionarioImpactoMedio.js?v=1.8"></script>
</asp:Content>