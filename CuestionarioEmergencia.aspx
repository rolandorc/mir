<%@ Page Title="" Language="C#" MasterPageFile="~/MasterPage.Master" AutoEventWireup="true" CodeBehind="CuestionarioEmergencia.aspx.cs" Inherits="MIR.CuestionarioEmergencia" %>


<asp:Content ID="Content2" ClientIDMode="Static" ContentPlaceHolderID="body" runat="server">
<form class='formsave'>
        <div class='form-group'> 
            <div class='form-block same-group'> 
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
                <h2>Cuestionario de Emergencia</h2>
                <br />

                <div class="form-group">
                <h3>Fecha de Publicación POE</h3>
                <div class="row ">
                <div class="col-lg-4">
                <div class='input-group date' id='FechaPublicacionDOF'>
                <input id="fechaPub" type='text' class="form-control dtp" />
                <span class="input-group-addon dtp">
                    <span class="glyphicon glyphicon-calendar"></span>
                </span>
                </div>
                </div>
                <div class="col-lg-8 text-right"> 
                <button type="button" class="btn btn-info" id="btnGuardarFechaDOF"><span class="glyphicon glyphicon-dashboard"></span>  Guardar Fecha</button>
                </div>
                </div>
                </div>

                <div class='form-group'> 
                    <div class='row'>
                        <div class='col-lg-12'>
                            <label class='text-uppercase'>Definición del problema y objetivos generales de la regulación <span class='required'></span></label>
                        </div>
                    </div> 
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='Emergenciaq1' disabled>Explique brevemente en qué consiste la regulación propuesta así como sus objetivos generales:</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textEmergenciaq1' name="textEmergenciaq1" placeholder='....' required></textarea>
                        </div>
                    </div> 
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='2' class='form-control mediumbold normaltext' id='Emergenciaq2' disabled>Justifique que la situación que el anteproyecto pretende resolver o prevenir constituye una emergencia de conformidad al Art. 24 fracción I de la Ley:</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textEmergenciaq2' name="textEmergenciaq2" placeholder='....' required></textarea>
                        </div>
                    </div> 
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='2' class='form-control mediumbold normaltext' id='Emergenciaq3' disabled> Indique el tipo de ordenamiento jurídico propuesto y enumere los ordenamientos legales (tomar en cuenta acuerdos o tratados) que dan fundamento jurídico al anteproyecto:</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textEmergenciaq3' name="textEmergenciaq3" placeholder='....' required></textarea>
                        </div>
                    </div> 
                </div>

                <div class='form-group'> 
                    <div class='row'>
                        <div class='col-lg-12'>
                            <label class='text-uppercase'>Impacto de la regulación<span class='required'></span></label>
                        </div>
                    </div> 
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='Emergenciaq4' disabled>Indique el tipo de riesgo que la regulación pretende mitigar:</textarea>  
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-lg-6'>
                            <textarea rows='1' class='form-control normaltext radiob' id='opcion1q4' disabled> Salud o bienestar de la población</textarea>
                        </div>
                        <div class='col-lg-2'>
                            <Input type ='checkbox' class='checkbox checkTrue' id='check1' name='check1' />
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-lg-6'>
                            <textarea rows='1' class='form-control normaltext radiob' id='opcion2q4' disabled> Salud animal</textarea>
                        </div>
                        <div class='col-lg-2'>
                            <Input type ='checkbox' class='checkbox checkTrue' id='check2' name='check11' />
                        </div>
                     </div>
                    <div class='row'>
                        <div class='col-lg-6'>
                            <textarea rows='1' class='form-control normaltext radiob' id='opcion3q4' disabled>Salud vegetal</textarea>
                        </div>
                        <div class='col-lg-2'>
                            <Input type ='checkbox' class='checkbox checkTrue' id='check3' name='check11' />
                        </div>
                   </div>
                    <div class='row'>
                        <div class='col-lg-6'>
                            <textarea rows='1' class='form-control normaltext radiob' id='opcion4q4' disabled>Medio Ambiente</textarea>
                        </div>
                        <div class='col-lg-2'>
                            <Input type ='checkbox' class='checkbox checkTrue' id='check4' name='check11' />
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-lg-6'>
                            <textarea rows='1' class='form-control normaltext radiob' id='opcion5q4' disabled>Recursos Naturales</textarea>
                        </div>
                        <div class='col-lg-2'>
                            <Input type ='checkbox' class='checkbox checkTrue' id='check5' name='check11' />
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-lg-6'>
                            <textarea rows='1' class='form-control normaltext radiob' id='opcion6q4' disabled>Economía</textarea>
                        </div>
                        <div class='col-lg-2'>
                            <Input type ='checkbox' class='checkbox checkTrue' id='check6' name='check11' />
                        </div>
                   </div>
                    <div class='row'>
                        <div class='col-lg-6'>
                            <textarea rows='1' class='form-control normaltext radiob' id='opcion7q4' disabled>Otros</textarea>
                        </div>
                        <div class='col-lg-2'>
                            <Input type ='checkbox' class='checkbox checkTrue' id='check7' name='check11' />
                        </div>
                    </div>
                  
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='Emergenciaq5' disabled> Indique la población o industria afectada</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textEmergenciaq5'  name="textEmergenciaq5" placeholder='....' required></textarea>
                        </div>
                    </div> 
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='Emergenciaq6' disabled> Origen o área geográfica de riesgo</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textEmergenciaq6'  name="textEmergenciaq6" placeholder='....' required></textarea>
                        </div>
                    </div>
                     <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='4' class='form-control mediumbold normaltext' id='Emergenciaq7' disabled> Justifiqué las razones por las que considera que la regulación propuesta no genera costos de cumplimiento para los particulares, independientemente de los beneficios que ésta genera</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textEmergenciaq7'  name="textEmergenciaq7"  placeholder='....' required></textarea>
                        </div>
                    </div>
                      <br />
                    <!-- Editable table -->
<%--                    <div class="card">
                        <h6 class="card-header text-center font-weight-bold  py-4">¿La regulación propuesta crea, modifica o elimina trámites?</h6>
                        <div class="card-body">
                            <div id="tableRegPropuesta" class="table-editable" style="word-break: break-all">
                                <span class="table-add float-right mb-3 mr-2"><a href="#!" class="text-success"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></a></span>
                                <table class="table table-bordered table-responsive-md table-striped text-center">
                                    <tr>
                                        <th class="text-center" style="width:10%"><h6><strong>Acción</strong></h6></th>
                                        <th class="text-center" style="width:10%"><h6><strong>Nombre del Trámite</strong></h6></th>--%>
                                        <%--<th class="text-center" style="width:7%"><h6><strong>Tipo</strong></h6></th>--%>
                                        <%--<th class="text-center" style="width:7%"><h6><strong>Vigencia</strong></h6></th>--%>
<%--                                        <th class="text-center" style="width:10%"><h6><strong>Medio de presentación</strong></h6></th>
                                        <th class="text-center" style="width:10%"><h6><strong>Requisitos</strong></h6></th>
                                        <th class="text-center" style="width:10%"><h6><strong>Población a la que impacta</strong></h6></th>
                                        <th class="text-center" style="width:10%"><h6><strong>Ficta</strong></h6></th>
                                        <th class="text-center" style="width:10%"><h6><strong>Plazo</strong></h6></th>--%>
                                        <%--<th class="text-center" style="width:7%"><h6><strong>Homoclave</strong></h6></th>--%>
<%--                                        <th class="text-center" style="width:16%"><h6><strong>Justificación</strong></h6></th>
                                    </tr>
                                    <tr id ="tr1">
                                        <td  > <select class="form-control" id="cboAltoImpactoq17" name="cboAltoImpactoq17" required></select></td>
                                        <td  class="pt-3-half" id="tdRegPropuesta1"  contenteditable="true"></td>--%>
                                        <%--<td  class="pt-3-half" id="tdRegPropuesta2" contenteditable="true"></td>--%>
                                        <%--<td  class="pt-3-half" id="tdRegPropuesta3" contenteditable="true"></td>--%>
<%--                                        <td  class="pt-3-half" id="tdRegPropuesta4" contenteditable="true"></td>
                                        <td  class="pt-3-half" id="tdRegPropuesta5" contenteditable="true"></td>
                                        <td  class="pt-3-half" id="tdRegPropuesta6" contenteditable="true"></td>
                                        <td  class="pt-3-half" id="tdRegPropuesta7" contenteditable="true"></td>
                                        <td  class="pt-3-half" id="tdRegPropuesta8" contenteditable="true"></td>--%>
                                        <%--<td  class="pt-3-half" id="tdRegPropuesta9" contenteditable="true"></td>--%>
<%--                                        <td  class="pt-3-half" id="tdRegPropuesta10" contenteditable="true"></td>
                                    </tr>

                                </table>
                            </div>
                        </div>
                    </div>--%>
                    <!-- Editable table -->
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

 <%--                                   <tr>
                                       <td class="text-center"  style="width:20%"><h6><strong>Tipo</strong></h6></td>
                                       <td class="pt-3-half " ><textarea rows='2' class='form-control Tipo' placeholder='....' required></textarea></td>
                                    </tr>--%>

<%--                                    <tr>
                                       <td class="text-center"  style="width:20%"><h6><strong>Vigencia</strong></h6></td>
                                       <td class="pt-3-half " ><textarea rows='2' class='form-control Vigencia' placeholder='....' required></textarea></td>
                                    </tr>--%>

                                    <tr> 
                                        <td class="text-center"  style="width:20%"><h6><strong>Medio de presentación</strong></h6></td>
                                        <td class="pt-3-half " ><textarea rows='2' class='form-control Medio' name='Medio' placeholder='....' required></textarea></td>
                                    </tr>

                                    <tr>
                                        <td class="text-center"  style="width:20%"><h6><strong>Requisitos</strong></h6></td>
                                        <td class="pt-3-half "  ><textarea rows='2' class='form-control Requisitos' name='Requisitos' placeholder='....' required></textarea></td>
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

<%--                                    <tr>
                                       <td class="text-center"  style="width:20%"><h6><strong>Homoclave</strong></h6></td>
                                       <td class="pt-3-half "  ><textarea rows='2' class='form-control Homoclave' placeholder='....' required></textarea></td>
                                    </tr>--%>

                                    <tr>
                                      <td class="text-center"  style="width:20%"><h6><strong>Justificación</strong></h6></td>
                                      <td class="pt-3-half "  ><textarea rows='2' class='form-control Justificacion' name='Justificacion' placeholder='....' required></textarea></td>
                                    </tr>
                                    <tr>
                                     <td class="text-center" id="btnaddtabla"  style="width:10%"> <button type='button' class='btn btn-success'onclick="VerificarNewTable()" title="Agregar Una Nueva Tabla" id='btnAddTabla'><span class='glyphicon glyphicon-plus'></span></button> </td>

                                    </tr>

                                </table>
                            </div>
                        </div>
                    </div>
                    <!-- Editable table -->

                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='Emergenciaq8' disabled>Crea nuevas obligaciones y/o sanciones para los particulares o hace más estrictas las existentes:</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textEmergenciaq8' name="textEmergenciaq8"  placeholder='....' required></textarea>
                        </div>
                    </div>
                                        <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='2' class='form-control mediumbold normaltext' id='Emergenciaq9' disabled>Modifica o crea trámites que signifiquen mayores cargas administrativas o costos de cumplimiento para los particulares:</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textEmergenciaq9' name="textEmergenciaq9"  placeholder='....' required></textarea>
                        </div>
                    </div>
                                        <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='1' class='form-control mediumbold normaltext' id='Emergenciaq10' disabled>Reduce o restringe prestaciones o derechos para los particulares:</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textEmergenciaq10'  name="textEmergenciaq10"  placeholder='....' required></textarea>
                        </div>
                    </div>
                    <div class='row'>
                        <div class='col-lg-12'> 
                            <textarea rows='4' class='form-control mediumbold normaltext' id='Emergenciaq11' disabled>Establece o modifica definiciones, clasificaciones, metodologías, criterios, caracterizaciones o cualquier otro término de referencia, afectando derechos, obligaciones, prestaciones o trámites de los particulares:</textarea>  
                        </div>
                    </div>
                    <div class='row'> 
                        <div class='col-lg-12'>
                            <textarea rows='6' class='form-control normaltext' id='textEmergenciaq11' name="textEmergenciaq11"  placeholder='....' required></textarea>
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
                        <Input type ='radio' class='checkbox rb1' id='checkConsultaPublica' name='checkConsultaPublica' value='true' /> 
                    </div> 
                    <div class='col-lg-1'> 
                        <Input type ='radio' class='checkbox rb1' id='check52' name='checkConsultaPublica'  value='false' /> 
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
                        <Input type ='radio' class='checkbox rb2' id='checkConstanciaPublicidad' name='checkConstanciaPublicidad' value= true /> 
                    </div> 
                    <div class='col-lg-1'> 
                        <Input type ='radio' class='checkbox rb2' id='check62' name='checkConstanciaPublicidad'  value= false /> 
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
        </div>
</form>
                <div class='actions-group col-lg-12'>
                <button type='button' class='btn btn-success' id='btnGuardar'><span class='glyphicon glyphicon-ok'></span> Guardar</button>
                <button type='button' class='btn btn-primary' id='btnAutorizar'><span class='glyphicon glyphicon-file'></span> Autorizar</button>
                
            </div>
</asp:Content>

<asp:Content ID="Content3" ClientIDMode="Static" ContentPlaceHolderID="scripts" runat="server">
    <script src="Scripts/ScriptForm/CuestionarioEmergencia.js?v=1.8"></script>  
    <script src="Scripts/autoNumeric-1.9.25.min.js"></script>
    <script src="Scripts/select2.min.js"></script>
    <script src="Scripts/select2_locale_es.js"></script>
    <script src="Scripts/jquery.validate.min.js"></script>
    <script src="Scripts/messages_es.min.js"></script>
    <script src="Scripts/moment.js"></script>
    <script src="Scripts/datepicker.js"></script>
    <script src="Scripts/messageProcessing.js"></script>
</asp:Content>