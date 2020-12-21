<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="ActualizacionPeriodicaEdit.aspx.cs" Inherits="MIR.ActualizacionPeriodicaEdit" %>


<asp:Content ID="Content1" ClientIDMode="Static" ContentPlaceHolderID="styles" runat="server">
</asp:Content>

<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">

<div class="row fechaproceso" style="display:none">
    <label id="lblfecinicio"></label>
</div>

<div class="row fechaproceso" style="display:none">
    <label id="lbllimitedias"></label>
</div>

<div class="row fechaproceso" style="display:none">
    <label id="lblDiastrans"></label>
</div>

<br />

<div id="OpcionCalculadora" style="display:none">

        <div class="row">
            <div class="col-lg-4">
                <div class="form-group">
                    <label>Tipo de Regulación:<span class="required"></span></label>
                    <select class="form-control" id="cboRegulacion" name="cboRegulacion" required></select>
                </div>
            </div>

            <div class="col-lg-4">
                <div class="form-group" id="formOrden">
                    <label>Tipo de Ordenamiento Jurídico <span class="required"></span></label>
                    <select class="form-control" id="cboOrdenamiento" name="cboOrdenamiento" required></select>
                </div>
            </div>

                <div class="col-lg-4">
                <div class="form-group">
                    <label>Tipo de MIR Correspondiente: <span class="required"></span></label>
                    <select class="form-control" id="cboAir" name="cboAir" required></select>
                </div>
            </div>
        </div>  
</div>

<div id="divComents"  class="row" style ="display: none">
    <div class="col-lg-8">
        <div class="form-group">
            <label>Comentarios:</label>
            <textarea rows="4" class=" form-control ph-center text-capitalize text-center" id="txtComents"   disabled></textarea> 
        </div>
    </div>
</div>

<form class='formsave'>
        <div class='form-group'> 
            <div class='form-block same-group'>                  
                <h2>Cuestionario de Actualización periódica</h2>

                <br />
                <div class='form-group'> 
                    <div class='row'>
                        <a id="anchorBackProject" target='_blank'><i class='glyphicon glyphicon-paperclip'></i>MIR Anterior</a>
                    </div>
                    <div class='row'>
                        <div class='col-lg-12'>
                            <label class='text-uppercase'>Definición del problema y objetivos generales de la regulación <span class='required'></span></label>
                        </div>
                    </div> 
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='Actualizacionq1' disabled>Describa los objetivos generales de la regulación propuesta</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textActualizacionq1' name="textActualizacionq1" placeholder='....' required></textarea>
                        </div>
                    </div> 
                   <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='3' class='form-control mediumbold normaltext' id='Actualizacionq2' disabled>Describa la problemática o situación que da origen a la intervención gubernamental, justificando cómo la regulación propuesta actualiza una situación existente y que dicha actualización no altera en lo sustancial el ordenamiento previamente analizado.</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textActualizacionq2' name="textActualizacionq2" placeholder='....' required></textarea>
                        </div>
                    </div> 
                   <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='4' class='form-control mediumbold normaltext' id='Actualizacionq3' disabled>Indique el tipo de ordenamiento jurídico propuesto. Asimismo, señale si existen disposiciones jurídicas vigentes directamente aplicables a la problemática materia del anteproyecto, enumérelas y explique por qué son insuficientes para atender la problemática identificada.</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textActualizacionq3' name="textActualizacionq3" placeholder='....' required></textarea>
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
                            <div id="tableAlternativas" class="table-editable"  style="word-break: break-all">
                                <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></a></span>
                                <table class="table table-bordered table-responsive-md table-striped text-center">
                                    <tr>
                                        <th class="text-center" style="width:50%"><h6><strong>Alternativas</strong></h6></th>
                                        <th class="text-center" style="width:50%"><h6><strong>Descripción de las alternativas y estimación de los costos y beneficios</strong></h6></th>

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
                            <textarea rows='2' class='form-control mediumbold normaltext' id='Actualizacionq4' disabled>Justifique las razones por las que la regulación propuesta es considerada la mejor opción para atender la problemática señalada</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textActualizacionq4' name="textActualizacionq4" placeholder='....' required></textarea>
                        </div>
                    </div>
                </div>
                  <br />
                 <div class='form-group'> 
                    <div class='row'>
                        <div class='col-lg-12'>
                            <label class='text-uppercase'>Impacto de la Regulación <span class='required'></span></label>
                        </div>
                    </div> 
                     <div class='row'>
                        <div class='col-lg-10'>
                        </div>
                        <div class='col-lg-1'>
                            <label class='text-uppercase'>si</label>
                        </div>
                        <div class='col-lg-1'>
                            <label class='text-uppercase'>no</label>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-lg-10'> 
                            <textarea rows='2' class='form-control mediumbold normaltext' id='Actualizacionq5' disabled>¿La regulación propuesta contiene disposiciones en materia de salud humana, animal o vegetal, seguridad, trabajo, medio ambiente o protección a los consumidores?</textarea>  
                        </div>
                        <div class='col-lg-1'>
                            <Input type ='radio' class=' radio-inline rb3' id='check1' name='check' />
                        </div>
                        <div class='col-lg-1'>
                            <Input type ='radio' class='radio-inline rb3' id='check2' name='check' />
                        </div>
                    </div> 
                    <br />
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='Actualizacionq6' disabled>Población o industria potencialmente afectada</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textActualizacionq6' name="textActualizacionq6" placeholder='....' required></textarea>
                        </div>
                    </div> 
                     <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='Actualizacionq7' disabled>Origen y área geográfica del riesgo</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textActualizacionq7' name="textActualizacionq7" placeholder='....' required></textarea>
                        </div>
                    </div> 
                   <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='Actualizacionq8' disabled>Justifique cómo la regulación puede mitigar el riesgo</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textActualizacionq8'  name="textActualizacionq8" placeholder='....' required></textarea>
                        </div>
                    </div> 


                    <br />


                    <br />
                    <!-- Editable table -->
                    <div class="card">
                        <h5 class="card-header text-center font-weight-bold  py-4">Señale si derivado de la actualización periódica se modificaron los costos y beneficios previamente identificados:</h5>
                        <div class="card-body">
                            <div id="tableCostos" class="table-editable"  style="word-break: break-all">
                                <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></a></span>
                                <table class="table table-bordered table-responsive-md table-striped text-center">
                                    <tr>
                                        <th class="text-center"  style="width:11%"></th>
                                        <th class="text-center"  style="width:11%"><h6><strong>Único $</strong></h6></th>
                                        <th class="text-center"  style="width:11%"><h6><strong>Años </strong></h6></th>
                                        <th class="text-center"  style="width:11%"><h6><strong>Indique el grupo o industria afectado</strong></h6></th>
                                        <th class="text-center"  style="width:11%"><h6><strong>Describa de manera general los costos o beneficios que implica la regulación propuesta</strong></h6></th>
                                        <th class="text-center"  style="width:11%"><h6><strong>Promedio $</strong></h6></th>
                                        <th class="text-center"  style="width:11%"><h6><strong>Anual</strong></h6></th>
                                        <th class="text-center"  style="width:11%"><h6><strong>Proporcione la estimación monetizada de los costos o beneficios que implica la regulación</strong></h6></th>
                                        <th class="text-center"  style="width:11%"><h6><strong>Costo total (Valor presente)$</strong></h6></th>
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
                                        <td class="pt-3-half" id="tdCostos8" contenteditable="true"></td>
                                    </tr>
                                     <tr>
                                        <td class="pt-3-half  text-left" ><h6>Beneficios</h6></td>
                                        <td class="pt-3-half" id="tdCostos9" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos10" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos11" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos12" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos13" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos14" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos15" contenteditable="true"></td>
                                        <td class="pt-3-half" id="tdCostos16" contenteditable="true"></td>
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
                            <label class='text-uppercase'>Cumplimiento y aplicación de la propuesta <span class='required'></span></label>
                        </div>
                    </div> 
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='Actualizacionq9' disabled>Describa la forma y/o los mecanismos a través de los cuales se implementará la regulación (incluya recursos públicos)</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textActualizacionq9' name="textActualizacionq9" placeholder='....' required></textarea>
                        </div>
                    </div> 
                   <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='2' class='form-control mediumbold normaltext' id='Actualizacionq10' disabled>Describa los esquemas de verificación y vigilancia, así como las sanciones que aegurarán el cumplimiento de la regulación</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textActualizacionq10' name="textActualizacionq10" placeholder='....' required></textarea>
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
                            <textarea rows='1' class='form-control mediumbold normaltext' id='Actualizacionq11' disabled>Describa la forma y los medios a través de los cuales se evaluará el logro de los objetivos de la regulación</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textActualizacionq11' name="textAltoImpactoq11" placeholder='....' required></textarea>
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
                                        <th class="text-center"  style="width:33%"></th>
                                        <th class="text-center"  style="width:33%"><h6><strong>Particular</strong></h6></th>
                                        <th class="text-center"  style="width:33%"><h6><strong>Opinión</strong></h6></th>
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
                            <textarea rows='2' class='form-control mediumbold normaltext' id='Actualizacion12' disabled>Indique las propuestas que se incluyeron en la regulación como resultado de las consultas realizadas</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textActualizacionq12' name="textAltoImpactoq12" placeholder='....' required></textarea>
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
            <button type="button" class="btn btn-info" id="btnRegresar"><span class="glyphicon glyphicon-arrow-left"></span> Regresar a listado</button>
            <button type='button'  style='display:none' class='btn btn-success' id='btnAceptar'><span class='glyphicon glyphicon-ok'></span> Aceptar</button>
            <button type='button'  style='display:none' class='btn btn-info' id='btnInfo'><span class='glyphicon glyphicon-plus'></span>Solicitar mas Información</button>
            <button type='button'  style='display:none'  class='btn btn-warning' id='btnRechazar'><span class='glyphicon glyphicon-warning-sign'></span> Rechazar</button>
        </div> 


                    <!-- Modal -->  
<div class='modal fade' id='modalRechazo' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>  
    <div class='modal-dialog modal-dialog-centered' role='document'>  
    <div class='modal-content'>  
        <div class='modal-header'>  
        <h5 class='modal-title' id='titulo1'>Comentario a Enlace</h5>  
        <h5 class='modal-title' id='titulo2'>Motivo de Rechazo</h5>  
            <button type='button' class='close' data-dismiss='modal' aria-label='Close'>  
         <span aria-hidden='true'>&times;</span>  
        </button>  
        </div>  
        <div class='modal-body'>  
        <textarea rows='4' class='form-control' id='ComentarioRechazo' placeholder='....' required></textarea>  
        </div>  
        <div class='modal-footer'>  
        <a id='btnEnviarComent'   class='btn btn-primary btn-block'>Enviar Comentario</a>  
        <a id='btnmodalRechazo'   class='btn btn-warning btn-block'>Enviar motivo de rechazo</a>  
        </div>  
    </div>  
    </div>  
</div>                                 

</asp:Content>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="scripts" runat="server">
    <script src="Scripts/ScriptForm/ActualizacionPeriodicaEdit.js?v=1.5"></script>
</asp:Content>