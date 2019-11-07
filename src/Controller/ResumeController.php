<?php


namespace App\Controller;


use App\Form\LoginForm;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


class ResumeController extends AbstractController
{

    /**
     * @Route("/login",name="resume_login")
     */
    public function loginAction(Request $request)
    {
        $user = $this->getUser();

        $form = $this->createForm(LoginForm::class, null, [
            'attr' => [
                'user' => $user,
                'type' => 'new'
            ]
        ]);
        $form->handleRequest($request);

     /*   if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();
            $data->setOrgId($user->getOrgId());

            $this->em->persist($data);

            try {
                $this->em->flush();
                $this->addFlash('success', 'T_add_success');
                return $this->redirectToRoute('MF14_list', $request->query->all());

            } catch (\Exception $e) {

                $this->addFlash('error', 'T_add_error');
            }
        }

        $transferInfo = $this->getTransferInfo();*/

        return $this->render('new.html.twig', [
            'form' => $form->createView(),
            'type' => 'new',
        ]);
    }

}