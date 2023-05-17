import { redirect } from 'react-router-dom';
import {
  createContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
} from '../../contacts';
import { ActionArgs, LoaderArgs } from '../types';

const Paths = {
  contact: 'contacts/:contactId',
  editContact: 'contacts/:contactId/edit',
} as const;

export async function rootAction() {
  const contact = await createContact();
  return redirect(`/contacts/${contact.id}/edit`);
}

export async function rootLoader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get('q');
  const contacts = await getContacts(q);
  return { contacts, q };
}

export async function contactLoader({
  params,
}: LoaderArgs<typeof Paths.contact>) {
  const contact = await getContact(params.contactId);
  return { contact };
}

export async function deleteContactAction({
  params,
}: ActionArgs<typeof Paths.contact>) {
  await deleteContact(params.contactId);
  return redirect('/');
}

export async function editAction({
  request,
  params,
}: ActionArgs<typeof Paths.editContact>) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}

export async function favoriteAction({
  request,
  params,
}: ActionArgs<typeof Paths.contact>) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get('favorite') === 'true',
  });
}
