import { createEffect } from 'effector'
import { ISignUpFx } from '../../types/auth'
import api from '../axiosClient'
import { toast } from 'react-toastify'

export const singUpFx = createEffect(
  async ({ url, username, password, email }: ISignUpFx) => {
    const { data } = await api.post(url, { username, password, email })

    if (data.warningMessage) {
      toast.warning(data.warningMessage)
      return
    }
    return data
  }
)
