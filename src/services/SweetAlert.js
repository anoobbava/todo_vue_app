import Swal from 'sweetalert2'

export default {
  successfulLogin () {
    Swal.fire({
      title: 'Success!',
      type: 'success',
      position: 'center',
      timer: 1000,
      showConfirmButton: false
    })
  },

  failureLogin () {
    Swal.fire({
      title: 'Error!',
      text: 'Error',
      type: 'error',
      timer: 1000,
      showConfirmButton: false
    })
  }

}
