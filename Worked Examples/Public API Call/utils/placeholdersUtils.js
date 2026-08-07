
export const getTemplateModalBody = () => {
  return `  <div
          class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable"
        >         <div class="modal-content vh-100 vw-100">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div
              class="modal-body d-flex justify-content-center align-items-center"
            >
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div></div>`
}

export const getErrorModal = (error) => {
  return `<div class="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable">
  <div class="modal-content">

    
    <div class="modal-header">
      <h5 class="modal-title text-danger">Error</h5>

      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close">
      </button>
    </div>

   
    <div class="modal-body">

      
      <h1 class="text-danger text-center fw-bold">${error.message}</h1>

    </div>

   
    <div class="modal-footer justify-content-center">

      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal">
        Close
      </button>

    </div>

  </div>
</div>`
}


export const userPlaceholder = () => `
<div class="col-lg-6 mb-4">

    <div class="card p-4 shadow-sm rounded-4">

        <div class="row align-items-center">

            <div class="col-md-4 text-center">

                <div class="placeholder-glow">
                    <span
                        class="placeholder rounded-circle"
                        style="
                            width:190px;
                            height:190px;
                            display:inline-block;
                        ">
                    </span>
                </div>

            </div>

            <div class="col-md-8">

                <div class="placeholder-glow mb-3">
                    <span class="placeholder col-8 fs-1 py-3 rounded"></span>
                </div>

                <div class="placeholder-glow mb-4">
                    <span class="placeholder col-4 fs-4 py-2 rounded"></span>
                </div>

                <div class="row gy-3">

                    <div class="col-6">

                        <div class="d-flex gap-3">

                            <span
                                class="placeholder rounded"
                                style="
                                    width:44px;
                                    height:44px;
                                ">
                            </span>

                            <div class="flex-grow-1 placeholder-glow">

                                <span class="placeholder col-4 mb-2"></span>

                                <span class="placeholder col-10"></span>

                            </div>

                        </div>

                    </div>

                    <div class="col-6">

                        <div class="d-flex gap-3">

                            <span
                                class="placeholder rounded"
                                style="
                                    width:44px;
                                    height:44px;
                                ">
                            </span>

                            <div class="flex-grow-1 placeholder-glow">

                                <span class="placeholder col-4 mb-2"></span>

                                <span class="placeholder col-9"></span>

                            </div>

                        </div>

                    </div>

                    <div class="col-6">

                        <div class="d-flex gap-3">

                            <span
                                class="placeholder rounded"
                                style="
                                    width:44px;
                                    height:44px;
                                ">
                            </span>

                            <div class="flex-grow-1 placeholder-glow">

                                <span class="placeholder col-4 mb-2"></span>

                                <span class="placeholder col-8"></span>

                            </div>

                        </div>

                    </div>

                    <div class="col-6">

                        <div class="d-flex gap-3">

                            <span
                                class="placeholder rounded"
                                style="
                                    width:44px;
                                    height:44px;
                                ">
                            </span>

                            <div class="flex-grow-1 placeholder-glow">

                                <span class="placeholder col-4 mb-2"></span>

                                <span class="placeholder col-7"></span>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="d-flex justify-content-between mt-5">

                    <span
                        class="placeholder rounded-pill"
                        style="
                            width:210px;
                            height:48px;
                        ">
                    </span>

                    <span
                        class="placeholder rounded-pill"
                        style="
                            width:160px;
                            height:48px;
                        ">
                    </span>

                </div>

            </div>

        </div>

    </div>

</div>
`;
