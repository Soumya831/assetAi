import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

interface KubernetesCluster {
  id: string;
  name: string;
  state: 'Running' | 'Error' | 'Stopped';
  autoScaling: 'Enabled' | 'Disabled';
  clusterType: string;
  size: number;
  cpuCores: number;
  memory: number;
  kubernetesVersion: string;
  account: string;
  zone: string;
}

@Component({
  selector: 'app-kubernetes',
  imports: [CommonModule, FormsModule, MatIconModule, MatCheckboxModule],
  templateUrl: './kubernetes.html',
  styleUrl: './kubernetes.scss',
})
export class Kubernetes {
  showCreateDialog = false;

  newCluster = {
    name: '',
    description: '',
    zone: 'CS-SIM1 Adv Zone x86',
    hypervisor: '',
    kubernetesVersion: '1.26.0',
    computeOffering: 'Kubernetes',
    nodeRootDiskSize: 8,
    network: '',
    haEnabled: false,
    clusterSize: 1,
    sshKeyPair: '',
    showAdvancedSettings: false,
  };

  zones = ['CS-SIM1 Adv Zone x86', 'IN-GGN1 SG Zone ARM64', 'IN-BLR1 Basic Zone x86'];
  kubernetesVersions = ['1.26.0', '1.25.0', '1.24.0'];
  computeOfferings = ['Kubernetes', 'Small Instance', 'Medium Instance', 'Large Instance'];
  networks = ['isolated-network-1', 'shared-network-1', 'vpc-tier-1'];
  sshKeyPairs = ['admin-keypair', 'test-keypair'];

  clusters: KubernetesCluster[] = [
    {
      id: '1',
      name: 'test-k8s',
      state: 'Error',
      autoScaling: 'Disabled',
      clusterType: 'CloudManaged',
      size: 1,
      cpuCores: 4,
      memory: 8192,
      kubernetesVersion: '1.26.0',
      account: 'admin',
      zone: 'CS-SIM1 Adv Zone x86',
    },
  ];

  currentPage = 1;
  itemsPerPage = 20;

  get totalItems(): number {
    return this.clusters.length;
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
  }

  openCreateDialog(): void {
    this.showCreateDialog = true;
  }

  closeCreateDialog(): void {
    this.showCreateDialog = false;
    this.resetForm();
  }

  onCreateCluster(): void {
    this.closeCreateDialog();
  }

  resetForm(): void {
    this.newCluster = {
      name: '',
      description: '',
      zone: 'CS-SIM1 Adv Zone x86',
      hypervisor: '',
      kubernetesVersion: '1.26.0',
      computeOffering: 'Kubernetes',
      nodeRootDiskSize: 8,
      network: '',
      haEnabled: false,
      clusterSize: 1,
      sshKeyPair: '',
      showAdvancedSettings: false,
    };
  }
}
